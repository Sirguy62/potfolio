import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/get-session";
import { deleteTask, updateTask } from "@/domain/task/task.service";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await context.params;
  const body = await request.json();

  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const updated = await updateTask({
    taskId,
    ...body,
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await context.params;

  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await deleteTask({ taskId, userId: session.user.id });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE TASK ERROR:", err);
    return NextResponse.json({ error: "Failed" }, { status: 400 });
  }
}
