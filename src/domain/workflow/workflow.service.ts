import { prisma } from "@/lib/db";
import { Prisma } from "@prisma/client";

/**
 * Default stages created when a workflow is created
 */
const DEFAULT_STAGES = [
  { name: "Backlog", order: 1 },
  { name: "In Progress", order: 2 },
  { name: "Review", order: 3 },
  { name: "Done", order: 4 },
];

/**
 * Create a new workflow with default stages
 */
export async function createWorkflow(params: {
  name: string;
  description?: string;
  ownerId: string;
}) {
  const { name, description, ownerId } = params;

  if (!name.trim()) {
    throw new Error("Workflow name is required");
  }

  return prisma.$transaction(async (tx) => {
    const workflow = await tx.workflow.create({
      data: {
        name,
        description,
        ownerId,
      },
    });

    await tx.stage.createMany({
      data: DEFAULT_STAGES.map((stage) => ({
        ...stage,
        workflowId: workflow.id,
      })),
    });

    return workflow;
  });
}

/**
 * Fetch a workflow with stages and tasks
 * Ensures the user owns the workflow
 */
export async function getWorkflowById(params: {
  workflowId: string;
  userId: string;
}) {
  const { workflowId, userId } = params;

  const workflow = await prisma.workflow.findFirst({
    where: {
      id: workflowId,
      ownerId: userId,
    },
    include: {
      stages: {
        orderBy: { order: "asc" },
        include: {
          tasks: {
            orderBy: { createdAt: "asc" },
          },
        },
      },
    },
  });

  if (!workflow) {
    throw new Error("Workflow not found or access denied");
  }

  return workflow;
}

/**
 * List all workflows owned by a user
 */
export async function listUserWorkflows(userId: string) {
  return prisma.workflow.findMany({
    where: { ownerId: userId },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      description: true,
      createdAt: true,
    },
  });
}

/**
 * Rename a workflow
 */
export async function updateWorkflowName(params: {
  workflowId: string;
  userId: string;
  name: string;
  description?: string;
}) {
  const { workflowId, userId, name, description } = params;

  return prisma.workflow.update({
    where: {
      id: workflowId,
      ownerId: userId,
    },
    data: {
      name,
      description,
    },
  });
}

/**
 * Delete a workflow (cascade deletes stages, tasks, etc.)
 */
export async function deleteWorkflow(params: {
  workflowId: string;
  userId: string;
}) {
  const { workflowId, userId } = params;

  // Ensure ownership
  const exists = await prisma.workflow.findFirst({
    where: { id: workflowId, ownerId: userId },
    select: { id: true },
  });

  if (!exists) {
    throw new Error("Workflow not found or access denied");
  }

  await prisma.workflow.delete({
    where: { id: workflowId },
  });

  return { success: true };
}
