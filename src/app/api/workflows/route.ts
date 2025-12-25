import { NextResponse } from "next/server";
import {
  listUserWorkflows,
  createWorkflow,
} from "@/domain/workflow/workflow.service";
import { getSession } from "@/lib/get-session";




/**
 * GET /api/workflows
 * List workflows owned by the user
 */
export async function GET() {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const workflows = await listUserWorkflows(session.user.id);
  return NextResponse.json(workflows);
}

/**
 * POST /api/workflows
 * Create a new workflow
 */
export async function POST(req: Request) {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { name, description } = body;

  try {
    const workflow = await createWorkflow({
      name,
      description,
      ownerId: session.user.id,
    });

    return NextResponse.json(workflow, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to create workflow",
      },
      { status: 400 }
    );
  }
}
