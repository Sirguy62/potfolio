import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/get-session";
import { moveTask } from "@/domain/task/task.service";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { taskId: string } }
) {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { taskId } = params;
  const { toStageId } = await req.json();

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
