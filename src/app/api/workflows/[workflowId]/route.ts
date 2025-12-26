import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/get-session";
import {
  getWorkflowById,
  updateWorkflow,
  deleteWorkflow,
} from "@/domain/workflow/workflow.service";

/* =========================
   GET WORKFLOW (existing)
========================= */
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

/* =========================
   UPDATE WORKFLOW
========================= */
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ workflowId: string }> }
) {
  const { workflowId } = await context.params;

  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  try {
    const workflow = await updateWorkflow({
      workflowId,
      userId: session.user.id,
      name: body.name,
      description: body.description,
    });

    return NextResponse.json(workflow);
  } catch (err) {
    console.error("UPDATE WORKFLOW ERROR:", err);
    return NextResponse.json(
      { error: "Failed to update workflow" },
      { status: 400 }
    );
  }
}

/* =========================
   DELETE WORKFLOW
========================= */
export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ workflowId: string }> }
) {
  const { workflowId } = await context.params;

  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await deleteWorkflow({
      workflowId,
      userId: session.user.id,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE WORKFLOW ERROR:", err);
    return NextResponse.json(
      { error: "Failed to delete workflow" },
      { status: 400 }
    );
  }
}
