"use client";

import { useRef, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import Column from "./ReadOnlyColumn";

type Task = {
  id: string;
  title: string;
};

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

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  /* =======================
     CREATE
  ======================= */
  function handleTaskCreated(task: Task & { stageId: string }) {
    setLocalWorkflow((wf) => ({
      ...wf,
      stages: wf.stages.map((stage) =>
        stage.id === task.stageId
          ? { ...stage, tasks: [...stage.tasks, task] }
          : stage
      ),
    }));
  }

  /* =======================
     DELETE (UNCHANGED)
  ======================= */
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
      if (!res.ok) throw new Error("Delete failed");
    } catch {
      setLocalWorkflow(previous);
    } finally {
      deletingRef.current.delete(taskId);
    }
  }

  /* =======================
     DRAG & DROP
  ======================= */
  async function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const taskId = active.id as string;
    const toStageId = over.id as string;

    const previous = structuredClone(localWorkflow);

    setLocalWorkflow((wf) => {
      const movedTask = wf.stages
        .flatMap((s) => s.tasks)
        .find((t) => t.id === taskId);

      if (!movedTask) return wf;

      return {
        ...wf,
        stages: wf.stages.map((stage) => {
          if (stage.id === toStageId) {
            return {
              ...stage,
              tasks: [...stage.tasks.filter((t) => t.id !== taskId), movedTask],
            };
          }
          return {
            ...stage,
            tasks: stage.tasks.filter((t) => t.id !== taskId),
          };
        }),
      };
    });

    try {
      const res = await fetch(`/api/tasks/${taskId}/move`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toStageId }),
      });

      if (!res.ok) throw new Error();
    } catch {
      setLocalWorkflow(previous);
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

      <DndContext sensors={sensors} onDragEnd={onDragEnd}>
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
      </DndContext>
    </div>
  );
}
