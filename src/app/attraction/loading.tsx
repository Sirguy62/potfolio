export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="border rounded-lg p-4 animate-pulse">
          <div className="w-full h-40 bg-gray-200 rounded" />

          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />
          </div>

          <div className="mt-4 h-4 bg-gray-200 rounded w-1/3" />
        </div>
      ))}
    </div>
  );
}
