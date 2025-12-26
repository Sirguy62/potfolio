"use client";

import { useState } from "react";
import { Task } from "@/types/task";

type Props = {
  open: boolean;
  task: Task;
  onClose: () => void;
  onSaved: (task: Task) => void;
};

export default function EditTaskModal({ open, task, onClose, onSaved }: Props) {
  const [title, setTitle] = useState(task.title);
  const [loading, setLoading] = useState(false);
  const [dueDate, setDueDate] = useState(
    task.dueDate ? new Date(task.dueDate).toISOString().slice(0, 10) : ""
  );

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/tasks/${task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          dueDate: dueDate ? new Date(dueDate) : null,
        }),
      });

      if (!res.ok) throw new Error();

      const updated = await res.json();
      onSaved(updated);
      onClose();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg w-96 p-5">
        <h3 className="font-semibold mb-3 text-gray-600">Edit Task</h3>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2 text-sm mb-3"
        />

        <label className="block text-sm text-gray-600 mb-1">Due date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border rounded-md p-2 text-sm w-full mb-4"
        />

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button
            disabled={loading}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
