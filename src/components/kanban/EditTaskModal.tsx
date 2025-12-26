"use client";

import { Task } from "@/types/task";
import { useState } from "react";

type Props = {
  open: boolean;
  task: Task;
  onClose: () => void;
  onSaved: (task: Task) => void;
};

export default function EditTaskModal({ open, task, onClose, onSaved }: Props) {
  const [title, setTitle] = useState(task.title);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/tasks/${task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      if (!res.ok) throw new Error();

      const updated = await res.json();
      onSaved(updated);
      onClose();
    } catch {
      alert("Failed to update task");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 w-full max-w-sm"
      >
        <h2 className="text-lg font-semibold text-gray-600 mb-4">Edit Task</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 text-gray-600 py-2 text-sm"
          autoFocus
        />

        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="text-sm border px-3 text-gray-600 py-1 rounded"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="text-sm bg-indigo-600 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
