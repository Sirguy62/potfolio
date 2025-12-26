import { prisma } from "@/lib/db";
import { getSession } from "@/lib/get-session";
import { NextResponse } from "next/server";


export async function GET() {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json([]);
  }

  const logs = await prisma.activityLog.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return NextResponse.json(logs);
}
