"use client";

import { useState } from "react";
import Link from "next/link";

type Workflow = {
  id: string;
  name: string;
  description?: string | null;
};

export default function WorkflowCard({
  workflow,
  onUpdated,
  onDeleted,
}: {
  workflow: Workflow;
  onUpdated: (wf: Workflow) => void;
  onDeleted: (id: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(workflow.name);
  const [description, setDescription] = useState(workflow.description ?? "");
  const [loading, setLoading] = useState(false);

  async function save() {
    setLoading(true);

    const res = await fetch(`/api/workflows/${workflow.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });

    if (res.ok) {
      onUpdated({ ...workflow, name, description });
      setEditing(false);
    } else {
      alert("Failed to update workflow");
    }

    setLoading(false);
  }

  async function remove() {
    if (!confirm("Delete this workflow? This cannot be undone.")) return;

    const res = await fetch(`/api/workflows/${workflow.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      onDeleted(workflow.id);
    } else {
      alert("Failed to delete workflow");
    }
  }

  return (
    <li className="border rounded-lg p-4 bg-white">
      {editing ? (
        <>
          <input
            className="border p-2 rounded w-full text-gray-600 mb-2 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="border p-2 rounded w-full text-sm text-gray-600"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={save}
              disabled={loading}
              className="px-3 py-1 bg-indigo-600 text-white rounded text-sm"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="text-sm text-gray-600"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <Link
            href={`/workflows/${workflow.id}`}
            className="block hover:underline"
          >
            <h2 className="font-medium text-gray-800">{workflow.name}</h2>
            {workflow.description && (
              <p className="text-sm text-gray-500 mt-1">
                {workflow.description}
              </p>
            )}
          </Link>

          <div className="flex gap-3 mt-3 text-sm">
            <button
              onClick={() => setEditing(true)}
              className="text-indigo-600 hover:underline"
            >
              Edit
            </button>
            <button onClick={remove} className="text-red-600 hover:underline">
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}
