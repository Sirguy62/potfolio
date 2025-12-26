"use client";

import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import EditTaskModal from "./EditTaskModal";
import { Task } from "@/types/task";

// type Task = {
//   id: string;
//   title: string;
//   priority: number; // ✅ REQUIRED
// };

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

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const priorityColor: Record<number, string> = {
    0: "bg-green-100 text-green-700",
    1: "bg-yellow-100 text-yellow-700",
    2: "bg-red-100 text-red-700",
  };

  const priorityLabel =
    task.priority === 2 ? "High" : task.priority === 1 ? "Medium" : "Low";

  return (
    <>
      <div
        {...listeners}
        {...attributes}
        ref={setNodeRef}
        style={style}
        className="bg-white cursor-grab border rounded-md p-3 shadow-sm"
      >
        {/* Top row */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-xs px-2 py-0.5 rounded text-gray-600 ${
              priorityColor[task.priority]
            }`}
          >
            {priorityLabel}
          </span>

          <span className="text-sm font-medium flex-1 truncate text-gray-600">
            {task.title}
          </span>

          {/* Drag handle ONLY */}
          <span className=" text-gray-600 select-none">☰</span>
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-2">
          <button
            onClick={() => setOpen(true)}
            className="text-xs text-indigo-600 cursor-pointer hover:underline"
          >
            Edit
          </button>

          <button
            onClick={() => onTaskDeleted(task.id)}
            className="text-xs text-red-500 cursor-pointer hover:underline"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      <EditTaskModal
        open={open}
        task={task}
        onClose={() => setOpen(false)}
        onSaved={onTaskUpdated}
      />
    </>
  );
}
