"use client";

import { useRef, useState } from "react";
import Column from "./ReadOnlyColumn";

type Workflow = {
  id: string;
  name: string;
  description: string | null; // ✅ FIX
  stages: {
    id: string;
    name: string;
    tasks: {
      id: string;
      title: string;
    }[];
  }[];
};


export default function ClientBoard({ workflow }: { workflow: Workflow }) {
  const [localWorkflow, setLocalWorkflow] = useState(workflow);
  const deletingRef = useRef<Set<string>>(new Set());

  function handleTaskCreated(task: {
    id: string;
    title: string;
    stageId: string;
  }) {
    setLocalWorkflow((wf) => ({
      ...wf,
      stages: wf.stages.map((stage) =>
        stage.id === task.stageId
          ? { ...stage, tasks: [...stage.tasks, task] }
          : stage
      ),
    }));
  }

  async function handleTaskDeleted(taskId: string) {
    if (deletingRef.current.has(taskId)) return;
    deletingRef.current.add(taskId);

    const previous = structuredClone(localWorkflow);

    setLocalWorkflow((wf) => ({
      ...wf,
      stages: wf.stages.map((stage) => ({
        ...stage,
        tasks: stage.tasks.filter((t) => t.id !== taskId),
      })),
    }));

    try {
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }
    } catch (err) {
      console.error(err);
      setLocalWorkflow(previous);
    } finally {
      deletingRef.current.delete(taskId);
    }
  }

  return (
    <div className="space-y-6 px-4 min-h-screen">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          {localWorkflow.name}
        </h1>
        {localWorkflow.description && (
          <p className="text-sm text-gray-500 mt-1">
            {localWorkflow.description}
          </p>
        )}
      </div>

      <div className="flex gap-4 overflow-x-auto">
        {localWorkflow.stages.map((stage) => (
          <Column
            key={stage.id}
            stage={stage}
            workflowId={localWorkflow.id}
            onTaskCreated={handleTaskCreated}
            onTaskDeleted={handleTaskDeleted}
          />
        ))}
      </div>
    </div>
  );
}
