"use client";

// import ReadOnlyColumn from "./ReadOnlyColumn";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ReadOnlyBoard({ workflow }: any) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {/* {workflow.stages.map((stage: any) => (
        <ReadOnlyColumn key={stage.id} stage={stage} />
      ))} */}
    </div>
  );
}
