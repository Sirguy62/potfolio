"use client";

import { useRef, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
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

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  function findStageByTaskId(taskId: string) {
    return localWorkflow.stages.find((stage) =>
      stage.tasks.some((t) => t.id === taskId)
    );
  }

  function findTaskById(taskId: string) {
    return localWorkflow.stages
      .flatMap((s) => s.tasks)
      .find((t) => t.id === taskId);
  }


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


  function handleTaskUpdated(updatedTask: Task) {
    setLocalWorkflow((wf) => ({
      ...wf,
      stages: wf.stages.map((stage) => ({
        ...stage,
        tasks: stage.tasks.map((task) =>
          task.id === updatedTask.id
            ? { ...task, ...updatedTask } 
            : task
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
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();
    } catch {
      setLocalWorkflow(previous);
    } finally {
      deletingRef.current.delete(taskId);
    }
  }


  function handleDragStart(event: DragStartEvent) {
    const task = findTaskById(event.active.id as string);
    setActiveTask(task ?? null);
  }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveTask(null);

    if (!over || active.id === over.id) return;

    const taskId = active.id as string;
    const overId = over.id as string;

    const sourceStage = findStageByTaskId(taskId);
    const targetStage =
      localWorkflow.stages.find((s) => s.id === overId) ??
      findStageByTaskId(overId);

    if (!sourceStage || !targetStage) return;

    const previous = structuredClone(localWorkflow);

    // ✅ SAME COLUMN REORDER
    if (sourceStage.id === targetStage.id) {
      const oldIndex = sourceStage.tasks.findIndex((t) => t.id === taskId);
      const newIndex = sourceStage.tasks.findIndex((t) => t.id === overId);

      if (oldIndex === -1 || newIndex === -1) return;

      setLocalWorkflow((wf) => ({
        ...wf,
        stages: wf.stages.map((stage) =>
          stage.id === sourceStage.id
            ? {
                ...stage,
                tasks: arrayMove(stage.tasks, oldIndex, newIndex),
              }
            : stage
        ),
      }));

      return;
    }

    // ✅ CROSS COLUMN MOVE
    setLocalWorkflow((wf) => {
      const movedTask = sourceStage.tasks.find((t) => t.id === taskId);
      if (!movedTask) return wf;

      return {
        ...wf,
        stages: wf.stages.map((stage) => {
          if (stage.id === sourceStage.id) {
            return {
              ...stage,
              tasks: stage.tasks.filter((t) => t.id !== taskId),
            };
          }

          if (stage.id === targetStage.id) {
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
      const res = await fetch(`/api/tasks/${taskId}/move`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toStageId: targetStage.id }),
      });

      if (!res.ok) throw new Error();
    } catch {
      setLocalWorkflow(previous);
    }
  }

  /* =======================
     RENDER
  ======================= */
  return (
    <div className="space-y-6 px-4 min-h-screen">
      <Link
        href="/workflows"
        className="inline-flex items-center text-sm pt-2 text-indigo-600 hover:underline"
      >
        ← Back to Workflows
      </Link>
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          {localWorkflow.name}
        </h1>
        {localWorkflow.description && (
          <p className="text-sm text-gray-600 mt-1">
            {localWorkflow.description}
          </p>
        )}
      </div>

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-4 overflow-x-auto px-3">
          {localWorkflow.stages.map((stage) => (
            <Column
              key={stage.id}
              stage={stage}
              workflowId={localWorkflow.id}
              onTaskCreated={handleTaskCreated}
              onTaskDeleted={handleTaskDeleted}
              onTaskUpdated={handleTaskUpdated}
            />
          ))}
        </div>

        {/* ✅ Drag Overlay */}
        <DragOverlay>
          {activeTask ? (
            <div className="bg-white border rounded-md p-3 shadow-xl text-sm">
              {activeTask.title}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
