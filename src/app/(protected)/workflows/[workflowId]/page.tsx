import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/get-session";
import { getWorkflowById } from "@/domain/workflow/workflow.service";
import ClientBoard from "@/components/kanban/ClientBoard";

export default async function WorkflowBoardPage({
  params,
}: {
  params: Promise<{ workflowId: string }>;
}) {
  const { workflowId } = await params;

  const session = await getSession();
  if (!session?.user?.id) {
    redirect("/auth/login");
  }

  const workflow = await getWorkflowById({
    workflowId,
    userId: session.user.id,
  });

  if (!workflow) notFound();

  return (
    <div className="space-x-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <ClientBoard workflow={workflow} />;
    </div>
  ); 
}
