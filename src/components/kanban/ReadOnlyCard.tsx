"use client";

import { useState } from "react";
import EditTaskModal from "./EditTaskModal";
import { Task } from "@/types/task";

type Props = {
  task: Task;
  stageId: string;
  onDragStart: (taskId: string, stageId: string) => void;
  onTaskDeleted: (taskId: string) => void;
  onTaskUpdated: (task: Task) => void;
};

export default function ReadOnlyCard({
  task,
  stageId,
  onDragStart,
  onTaskDeleted,
  onTaskUpdated,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        draggable
        onDragStart={() => onDragStart(task.id, stageId)}
        className="bg-white border rounded-md p-3 cursor-move"
      >
        <div className="text-sm font-medium">{task.title}</div>

        {task.dueDate && (
          <div className="text-xs text-gray-500 mt-1">
            Due {new Date(task.dueDate).toLocaleDateString()}
          </div>
        )}

        <div className="flex justify-between mt-2">
          <button
            onClick={() => setOpen(true)}
            className="text-xs text-indigo-600"
          >
            Edit
          </button>
          <button
            onClick={() => onTaskDeleted(task.id)}
            className="text-xs text-red-500"
          >
            Delete
          </button>
        </div>
      </div>

      <EditTaskModal
        open={open}
        task={task}
        onClose={() => setOpen(false)}
        onSaved={onTaskUpdated}
      />
    </>
  );
}
