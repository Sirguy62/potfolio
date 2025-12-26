import { createTask } from "@/domain/task/task.service";
import { getSession } from "@/lib/get-session";
import { NextResponse } from "next/server";


/**
 * POST /api/tasks
 * Create a task
 */
export async function POST(req: Request) {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, description, workflowId, stageId, priority } =
    await req.json();

  if (!title || !workflowId || !stageId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 422 }
    );
  }

  try {
    const task = await createTask({
      title,
      description,
      workflowId,
      stageId,
      priority,
      creatorId: session.user.id,
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to create task",
      },
      { status: 400 }
    );
  }
}
