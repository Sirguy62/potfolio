"use client";

import { useState } from "react";
import CreateWorkflowModal from "./CreateWorkflowModal";


export default function CreateWorkflowButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        + New Workflow
      </button>

      {open && <CreateWorkflowModal onClose={() => setOpen(false)} />}
    </>
  );
}
