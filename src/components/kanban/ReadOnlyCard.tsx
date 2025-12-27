"use client";

import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import EditTaskModal from "./EditTaskModal";
import { Task } from "@/types/task";

type Props = {
  task: Task;
  onTaskDeleted: (taskId: string) => void;
  onTaskUpdated: (task: Task) => void;
};

export default function ReadOnlyCard({
  task,
  onTaskDeleted,
  onTaskUpdated,
}: Props) {
  const [open, setOpen] = useState(false);

  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: task.id });

  const priorityLabel =
    task.priority === 2 ? "High" : task.priority === 1 ? "Medium" : "Low";

  const priorityColor =
    task.priority === 2
      ? "bg-red-100 text-red-700"
      : task.priority === 1
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <>
      <div
        ref={setNodeRef}
        style={{ transform: CSS.Transform.toString(transform), transition }}
        className="bg-white border rounded-md p-3 shadow-sm"
      >
        {/* TOP ROW */}
        <div className="flex items-center justify-between gap-2">
          {/* PRIORITY BADGE */}
          <span className={`text-xs px-2 py-0.5 rounded ${priorityColor}`}>
            {priorityLabel}
          </span>

          {/* TITLE */}
          <span className="text-sm font-medium flex-1 truncate">
            {task.title}
          </span>

          {/* DRAG HANDLE */}
          <span
            {...listeners}
            {...attributes}
            className="cursor-grab text-gray-400 select-none"
          >
            ☰
          </span>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3 mt-2">
          <button
            onClick={() => setOpen(true)}
            className="text-xs text-indigo-600 hover:underline"
          >
            Edit
          </button>

          <button
            onClick={() => onTaskDeleted(task.id)}
            className="text-xs text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>

        {/* DUE DATE (optional) */}
        {task.dueDate && (
          <p className="text-xs text-gray-500 mt-1">
            Due {new Date(task.dueDate).toLocaleDateString()}
          </p>
        )}
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
