import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/get-session";
import { deleteTask, updateTask } from "@/domain/task/task.service";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await context.params; // ✅ REQUIRED
  const body = await req.json();

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
  _req: NextRequest,
  context: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await context.params; // ✅ REQUIRED

  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await deleteTask({
    taskId,
    userId: session.user.id,
  });

  return NextResponse.json({ success: true });
}
