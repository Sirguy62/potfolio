"use client";

import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import EditTaskModal from "./EditTaskModal";
import { Task } from "@/types/task";

// type Task = {
//   id: string;
//   title: string;
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

  return (
    <>
      <div
        ref={setNodeRef}
        style={{ transform: CSS.Transform.toString(transform), transition }}
        className="bg-white border rounded-md p-3"
      >
        <div className="flex justify-between items-start">
          <span className="text-sm">{task.title}</span>

          {/* Drag handle */}
          <span
            {...listeners}
            {...attributes}
            className="cursor-grab text-gray-400 select-none"
          >
            ☰
          </span>
        </div>

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
