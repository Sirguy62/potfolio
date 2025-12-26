import { redirect } from "next/navigation";
import CreateWorkflowButton from "@/components/workflows/CreateWorkflowButton";
import { listUserWorkflows } from "@/domain/workflow/workflow.service";
import { getSession } from "@/lib/get-session";
import WorkflowList from "@/components/workflows/WorkflowList";

export default async function WorkflowsPage() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect("/auth/login");
  }

  const workflows = await listUserWorkflows(session.user.id);

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Workflows</h1>
        <CreateWorkflowButton />
      </div>

      <WorkflowList initialWorkflows={workflows} />
    </div>
  );
}
