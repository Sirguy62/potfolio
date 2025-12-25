"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Task = {
  id: string;
  title: string;
};

type Props = {
  task: Task;
  onTaskDeleted: (taskId: string) => void;
};

export default function ReadOnlyCard({ task, onTaskDeleted }: Props) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="rounded-md bg-white border p-3 text-sm flex justify-between items-start"
    >
      {/* Drag handle ONLY */}
      <span
        {...attributes}
        {...listeners}
        className="cursor-grab select-none flex-1"
      >
        {task.title}
      </span>

      {/* DELETE (SAFE) */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // 🔑 critical
          onTaskDeleted(task.id);
        }}
        className="text-xs text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  );
}
