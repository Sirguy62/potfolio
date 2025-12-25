"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  workflowId: string;
  stageId: string;
  onTaskCreated: (task: any) => void;
};

export default function CreateTaskModal({
  open,
  onClose,
  workflowId,
  stageId,
  onTaskCreated,
}: Props) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleCreate() {
    if (!title.trim()) return;

    setLoading(true);

    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        workflowId,
        stageId,
      }),
    });

    if (res.ok) {
      const task = await res.json();
      onTaskCreated(task);
      setTitle("");
      onClose();
    }

    setLoading(false);
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
      <div className="bg-white rounded-lg w-96 p-5">
        <h3 className="font-semibold mb-3">New Task</h3>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="w-full border rounded px-3 py-2 text-sm mb-4"
          autoFocus
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="text-sm text-gray-600">
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={loading}
            className="bg-indigo-600 text-white px-4 py-2 rounded text-sm"
          >
            {loading ? "Creating…" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
