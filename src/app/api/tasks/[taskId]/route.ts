import { NextResponse } from "next/server";
import { getSession } from "@/lib/get-session";
import { deleteTask } from "@/domain/task/task.service";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ taskId: string }> }
) {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { taskId } = await params; // ✅ REQUIRED in Next 15+

  if (!taskId) {
    return NextResponse.json({ error: "taskId missing" }, { status: 400 });
  }

  await deleteTask({
    taskId,
    userId: session.user.id,
  });

  return NextResponse.json({ success: true });
}
