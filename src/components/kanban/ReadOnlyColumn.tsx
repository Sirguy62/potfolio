"use client";

import { useState } from "react";
import ReadOnlyCard from "./ReadOnlyCard";
import CreateTaskModal from "./CreateTaskModal";
import { Task } from "@/types/task";

type Props = {
  stage: {
    id: string;
    name: string;
    tasks: Task[];
  };
  workflowId: string;
  onDragStart: (taskId: string, stageId: string) => void;
  onDropTask: (stageId: string) => void;
  onTaskDeleted: (taskId: string) => void;
  onTaskUpdated: (task: Task) => void;
};

export default function Column({
  stage,
  workflowId,
  onDragStart,
  onDropTask,
  onTaskDeleted,
  onTaskUpdated,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDropTask(stage.id)}
      className="w-72 shrink-0 rounded-lg bg-gray-100 p-3"
    >
      <div className="flex justify-between mb-3">
        <h2 className="font-medium text-gray-700">{stage.name}</h2>
        <button
          onClick={() => setOpen(true)}
          className="text-xs text-indigo-600"
        >
          + Add
        </button>
      </div>

      <div className="space-y-2">
        {stage.tasks.map((task) => (
          <ReadOnlyCard
            key={task.id}
            task={task}
            stageId={stage.id}
            onDragStart={onDragStart}
            onTaskDeleted={onTaskDeleted}
            onTaskUpdated={onTaskUpdated}
          />
        ))}
      </div>

      <CreateTaskModal
        open={open}
        onClose={() => setOpen(false)}
        workflowId={workflowId}
        stageId={stage.id}
        onTaskCreated={() => {}}
      />
    </div>
  );
}
