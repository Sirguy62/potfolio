import { NextResponse } from "next/server";
import { getSession } from "@/lib/get-session";
import { prisma } from "@/lib/db";

export async function GET(
  _req: Request,
  { params }: { params: { workflowId: string } }
) {
  const session = await getSession();
  if (!session?.user?.id) return NextResponse.json([]);

  const logs = await prisma.activityLog.findMany({
    where: {
      userId: session.user.id,
      task: {
        workflowId: params.workflowId,
      },
    },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return NextResponse.json(logs);
}
