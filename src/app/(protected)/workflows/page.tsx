import Link from "next/link";
import { redirect } from "next/navigation";

import CreateWorkflowButton from "@/components/workflows/CreateWorkflowButton";
import { listUserWorkflows } from "@/domain/workflow/workflow.service";
import { getSession } from "@/lib/get-session";

export default async function WorkflowsPage() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect("/auth/login"); 
  }

  const workflows = await listUserWorkflows(session.user.id);

  return (
    <div className="max-w-6xl min-h-screen mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Workflows</h1>
        <CreateWorkflowButton />
      </div>

      {/* Empty state */}
      {workflows.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-4">No workflows yet.</p>
          <CreateWorkflowButton />
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workflows.map((wf) => (
            <li key={wf.id}>
              <Link
                href={`/workflows/${wf.id}`}
                className="block border rounded-lg p-4 hover:bg-gray-50 transition"
              >
                <h2 className="font-medium text-gray-800">{wf.name}</h2>

                {wf.description && (
                  <p className="text-sm text-gray-500 mt-1">{wf.description}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
