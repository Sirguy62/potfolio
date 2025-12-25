import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/get-session";
import { getWorkflowById } from "@/domain/workflow/workflow.service";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ workflowId: string }> }
) {
  const { workflowId } = await context.params;

  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const workflow = await getWorkflowById({
      workflowId,
      userId: session.user.id,
    });

    if (!workflow) {
      return NextResponse.json(
        { error: "Workflow not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(workflow);
  } catch (err) {
    console.error("GET WORKFLOW ERROR:", err);
    return NextResponse.json(
      { error: "Failed to fetch workflow" },
      { status: 400 }
    );
  }
}
