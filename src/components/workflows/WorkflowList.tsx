"use client";

import { useState } from "react";
import WorkflowCard from "./WorkflowCard";

type Workflow = {
  id: string;
  name: string;
  description?: string | null;
};

export default function WorkflowList({
  initialWorkflows,
}: {
  initialWorkflows: Workflow[];
}) {
  const [workflows, setWorkflows] = useState(initialWorkflows);

  if (workflows.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">No workflows yet.</div>
    );
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {workflows.map((wf) => (
        <WorkflowCard
          key={wf.id}
          workflow={wf}
          onUpdated={(updated) =>
            setWorkflows((list) =>
              list.map((w) => (w.id === updated.id ? updated : w))
            )
          }
          onDeleted={(id) =>
            setWorkflows((list) => list.filter((w) => w.id !== id))
          }
        />
      ))}
    </ul>
  );
}
