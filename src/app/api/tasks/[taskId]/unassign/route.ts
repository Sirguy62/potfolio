import { NextResponse } from "next/server";
import { deleteTask } from "@/domain/task/task.service";
import { getSession } from "@/lib/get-session";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await params;

  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await deleteTask({
      taskId,
      userId: session.user.id,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE TASK ERROR:", err);
    return NextResponse.json(
      { error: "Failed to delete task" },
      { status: 400 }
    );
  }
}
