import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/get-session";
import { assignTask } from "@/domain/task/task.service";

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ taskId: string }> }
) {
  const { taskId } = await context.params;

  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { userId } = body;

  if (!userId) {
    return NextResponse.json({ error: "userId missing" }, { status: 400 });
  }

  const assignment = await assignTask({
    taskId,
    userId,
    assignedById: session.user.id, // ✅ FIXED
  });

  return NextResponse.json(assignment);
}
