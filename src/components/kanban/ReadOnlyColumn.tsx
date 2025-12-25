"use client";

import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import CreateTaskModal from "./CreateTaskModal";
import ReadOnlyCard from "./ReadOnlyCard";
import { Task } from "@/types/task";

type ColumnProps = {
  stage: {
    id: string;
    name: string;
    tasks: Task[]; // ✅ FIXED
  };
  workflowId: string;
  onTaskCreated: (task: Task & { stageId: string }) => void;
  onTaskDeleted: (taskId: string) => void;
  onTaskUpdated: (task: Task) => void; // ✅ USE SHARED TYPE
};

export default function Column({
  stage,
  workflowId,
  onTaskCreated,
  onTaskDeleted,
  onTaskUpdated,
}: ColumnProps) {
  const [open, setOpen] = useState(false);

  // ✅ Enables dropping
  const { setNodeRef, isOver } = useDroppable({
    id: stage.id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`w-72 shrink-0 rounded-lg p-3 transition
        ${isOver ? "bg-indigo-100 ring-2 ring-indigo-400" : "bg-gray-100"}
      `}
    >
      {stage.tasks.length === 0 && (
        <div className="text-xs text-gray-400 italic py-4 text-center border border-dashed rounded">
          Drop tasks here
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-medium text-gray-700">{stage.name}</h2>
        <button
          onClick={() => setOpen(true)}
          className="text-xs text-indigo-600 hover:underline"
        >
          + Add
        </button>
      </div>

      {/* Tasks */}
      <div className="space-y-2 flex-1">
        {stage.tasks.map((task) => (
          <ReadOnlyCard
            key={task.id}
            task={task}
            onTaskDeleted={onTaskDeleted}
            onTaskUpdated={onTaskUpdated} // ✅ CORRECT
          />
        ))}
      </div>

      {/* Modal */}
      <CreateTaskModal
        open={open}
        onClose={() => setOpen(false)}
        workflowId={workflowId}
        stageId={stage.id}
        onTaskCreated={onTaskCreated}
      />
    </div>
  );
}
