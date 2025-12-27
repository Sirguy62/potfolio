import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/get-session";
import { moveTask } from "@/domain/task/task.service";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ taskId: string }> }
) {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ✅ FIX: await params
  const { taskId } = await context.params;

  const body = await req.json();
  const { toStageId } = body;

  if (!toStageId) {
    return NextResponse.json({ error: "Missing toStageId" }, { status: 422 });
  }

  try {
    const task = await moveTask({
      taskId,
      toStageId,
      userId: session.user.id,
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error("MOVE TASK ERROR:", error);
    return NextResponse.json({ error: "Failed to move task" }, { status: 400 });
  }
}
