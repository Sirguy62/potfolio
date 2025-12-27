import { NextRequest, NextResponse } from "next/server";
import { moveTask } from "@/domain/task/task.service";
import { getSession } from "@/lib/get-session";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await context.params;
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { toStageId } = body;

  if (!toStageId) {
    return NextResponse.json({ error: "Missing toStageId" }, { status: 422 });
  }

  const task = await moveTask({
    taskId,
    toStageId,
    userId: session.user.id,
  });

  return NextResponse.json(task);
}
