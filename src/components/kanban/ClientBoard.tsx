"use client";

import { useRef, useState } from "react";
import Column from "./ReadOnlyColumn";
import { Task } from "@/types/task";
import Link from "next/link";

type Stage = {
  id: string;
  name: string;
  tasks: Task[];
};

type Workflow = {
  id: string;
  name: string;
  description: string | null;
  stages: Stage[];
};

export default function ClientBoard({ workflow }: { workflow: Workflow }) {
  const [localWorkflow, setLocalWorkflow] = useState(workflow);
  const deletingRef = useRef<Set<string>>(new Set());

  const draggedTaskRef = useRef<{
    taskId: string;
    fromStageId: string;
  } | null>(null);

  function handleDragStart(taskId: string, fromStageId: string) {
    draggedTaskRef.current = { taskId, fromStageId };
  }

  async function handleDrop(toStageId: string) {
    const drag = draggedTaskRef.current;
    if (!drag || drag.fromStageId === toStageId) return;

    const previous = structuredClone(localWorkflow);

    // optimistic UI update
    setLocalWorkflow((wf) => {
      const movedTask = wf.stages
        .find((s) => s.id === drag.fromStageId)
        ?.tasks.find((t) => t.id === drag.taskId);

      if (!movedTask) return wf;

      return {
        ...wf,
        stages: wf.stages.map((stage) => {
          if (stage.id === drag.fromStageId) {
            return {
              ...stage,
              tasks: stage.tasks.filter((t) => t.id !== drag.taskId),
            };
          }

          if (stage.id === toStageId) {
            return {
              ...stage,
              tasks: [...stage.tasks, movedTask],
            };
          }

          return stage;
        }),
      };
    });

    try {
      const res = await fetch(`/api/tasks/${drag.taskId}/move`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toStageId }),
      });

      if (!res.ok) throw new Error();
    } catch {
      setLocalWorkflow(previous);
    } finally {
      draggedTaskRef.current = null;
    }
  }

  function handleTaskUpdated(updatedTask: Task) {
    setLocalWorkflow((wf) => ({
      ...wf,
      stages: wf.stages.map((stage) => ({
        ...stage,
        tasks: stage.tasks.map((t) =>
          t.id === updatedTask.id ? updatedTask : t
        ),
      })),
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
      const res = await fetch(`/api/tasks/${taskId}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
    } catch {
      setLocalWorkflow(previous);
    } finally {
      deletingRef.current.delete(taskId);
    }
  }

  return (
    <div className="space-y-6 px-4">
      <Link
        href="/workflows"
        className="inline-flex text-sm text-indigo-600 hover:underline"
      >
        ← Back to Workflows
      </Link>

      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          {localWorkflow.name}
        </h1>
        {localWorkflow.description && (
          <p className="text-sm text-gray-600">{localWorkflow.description}</p>
        )}
      </div>

      <div className="flex gap-4 overflow-x-auto">
        {localWorkflow.stages.map((stage) => (
          <Column
            key={stage.id}
            stage={stage}
            workflowId={localWorkflow.id}
            onDragStart={handleDragStart}
            onDropTask={handleDrop}
            onTaskDeleted={handleTaskDeleted}
            onTaskUpdated={handleTaskUpdated}
          />
        ))}
      </div>
    </div>
  );
}
