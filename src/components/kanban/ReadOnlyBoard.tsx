"use client";

// import ReadOnlyColumn from "./ReadOnlyColumn";

export default function ReadOnlyBoard({ workflow }: any) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {/* {workflow.stages.map((stage: any) => (
        <ReadOnlyColumn key={stage.id} stage={stage} />
      ))} */}
    </div>
  );
}
