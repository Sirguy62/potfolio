import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/get-session";
import { moveTask } from "@/domain/task/task.service";

export async function PATCH(
  _req: NextRequest,
  context: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await context.params;
  const { toStageId } = await _req.json();

  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const task = await moveTask({
    taskId,
    toStageId,
    userId: session.user.id,
  });

  return NextResponse.json(task);
}
