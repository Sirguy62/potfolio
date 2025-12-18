export default function Loader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 w-full"
        >
          <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-4 bg-gray-200 rounded mt-4 w-3/4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded mt-3 w-1/2 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded mt-3 w-1/3 animate-pulse" />
        </div>
      ))}
    </div>
  );
}
