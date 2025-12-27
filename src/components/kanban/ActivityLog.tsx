import { NextResponse } from "next/server";
import { getSession } from "@/lib/get-session";
import { prisma } from "@/lib/db";

export async function GET(
  _req: Request,
  context: { params: Promise<{ workflowId: string }> }
) {
  const { workflowId } = await context.params;

  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json([], { status: 401 });
  }

  const logs = await prisma.activityLog.findMany({
    where: {
      userId: session.user.id,
      task: {
        workflowId,
      },
    },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return NextResponse.json(logs);
}
