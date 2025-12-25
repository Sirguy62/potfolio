"use client";

import { useState } from "react";
import CreateTaskModal from "./CreateTaskModal";

type ColumnProps = {
  stage: {
    id: string;
    name: string;
    tasks: { id: string; title: string }[];
  };
  workflowId: string;
  onTaskCreated: (task: any) => void;
  onTaskDeleted: (taskId: string) => void;
};


export default function Column({
  stage,
  workflowId,
  onTaskCreated,
  onTaskDeleted,
}: ColumnProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-72 shrink-0 rounded-lg bg-gray-100 p-3">
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
      {/* Tasks */}
      <div className="space-y-2 flex-1">
        {stage.tasks.map((task: any) => (
          <div
            key={task.id}
            className="rounded-md bg-white border p-3 text-sm flex justify-between items-start"
          >
            <span>{task.title}</span>

            <button
              onClick={() => onTaskDeleted(task.id)}
              className="text-xs text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
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
