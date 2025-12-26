import { prisma } from "@/lib/db";
import { Prisma } from "@prisma/client";

/**
 * Create a new task inside a workflow + stage
 */
export async function createTask(params: {
  title: string;
  description?: string;
  workflowId: string;
  stageId: string;
  creatorId: string;
  priority?: number;
}) {
  const { title, description, workflowId, stageId, creatorId, priority } = params;

  if (!title.trim()) {
    throw new Error("Task title is required");
  }

  return prisma.$transaction(async (tx:Prisma.TransactionClient) => {
    const task = await tx.task.create({
      data: {
        title,
        description,
        workflowId,
        stageId,
        priority: params.priority ?? 1,
      },
    });

    // Log activity
    await tx.activityLog.create({
      data: {
        action: "TASK_CREATED",
        entityId: task.id,
        entityType: "TASK",
        userId: creatorId,
        taskId: task.id,
      },
    });

    return task;
  });
}

/**
 * Move a task to another stage (Kanban drag & drop)
 */
export async function moveTask(params: {
  taskId: string;
  toStageId: string;
  userId: string;
}) {
  const { taskId, toStageId, userId } = params;

  return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    const task = await tx.task.update({
      where: { id: taskId },
      data: { stageId: toStageId },
    });

    await tx.activityLog.create({
      data: {
        action: "TASK_MOVED",
        entityId: task.id,
        entityType: "TASK",
        userId,
        taskId: task.id,
      },
    });

    return task;
  });
}

/**
 * Assign a user to a task
 */
export async function assignTask(params: {
  taskId: string;
  userId: string;
  assignedById: string;
}) {
  const { taskId, userId, assignedById } = params;

  return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    const assignment = await tx.taskAssignment.create({
      data: {
        taskId,
        userId,
      },
    });

    await tx.activityLog.create({
      data: {
        action: "TASK_ASSIGNED",
        entityId: taskId,
        entityType: "TASK",
        userId: assignedById,
        taskId,
      },
    });

    return assignment;
  });
}

/**
 * Unassign a user from a task
 */
export async function unassignTask(params: {
  taskId: string;
  userId: string;
  removedById: string;
}) {
  const { taskId, userId, removedById } = params;

  return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    await tx.taskAssignment.delete({
      where: {
        taskId_userId: {
          taskId,
          userId,
        },
      },
    });

    await tx.activityLog.create({
      data: {
        action: "TASK_UNASSIGNED",
        entityId: taskId,
        entityType: "TASK",
        userId: removedById,
        taskId,
      },
    });

    return { success: true };
  });
}

/**
 * Update task details
 */
export async function updateTask(params: {
  taskId: string;
  title?: string;
  description?: string;
  priority?: number;
  dueDate?: Date | null;
}) {
  const { taskId, title, description, priority, dueDate } = params;

  return prisma.task.update({
    where: { id: taskId },
    data: {
      title,
      description,
      priority,
      dueDate,
    },
  });
}

/**
 * Delete a task
 */
export async function deleteTask(params: { taskId: string; userId: string }) {
  const { taskId, userId } = params;

  return prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    // ✅ Log activity with REQUIRED fields
    await tx.activityLog.create({
      data: {
        action: "TASK_DELETED",
        entityId: taskId, // ✅ REQUIRED
        entityType: "TASK",
        userId,
        taskId, // optional but good
      },
    });

    // ✅ Delete task
    await tx.task.delete({
      where: { id: taskId },
    });

    return { success: true };
  });
}
