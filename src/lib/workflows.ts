// lib/workflows.ts

import { prisma } from "./db";


export async function updateWorkflow(params: {
  workflowId: string;
  name?: string;
  description?: string | null;
}) {
  const { workflowId, name, description } = params;

  return prisma.workflow.update({
    where: { id: workflowId },
    data: { name, description },
  });
}

export async function deleteWorkflow(workflowId: string) {
  return prisma.workflow.delete({
    where: { id: workflowId },
  });
}
