export default function ReadOnlyCard({ task }: any) {
  return (
    <div className="bg-white rounded-md border p-3 shadow-sm">
      <p className="text-sm font-medium text-gray-800">{task.title}</p>

      {task.description && (
        <p className="text-xs text-gray-500 mt-1">{task.description}</p>
      )}
    </div>
  );
}
