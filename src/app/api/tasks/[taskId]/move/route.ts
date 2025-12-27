import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/get-session";
import { moveTask } from "@/domain/task/task.service";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await context.params; // ✅ REQUIRED
  const { toStageId } = await req.json();

  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!toStageId) {
    return NextResponse.json({ error: "toStageId missing" }, { status: 400 });
  }

  await moveTask({
    taskId,
    toStageId,
    userId: session.user.id,
  });

  return NextResponse.json({ success: true });
}
