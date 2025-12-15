export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Booking Confirmed 🎉
        </h1>
        <p className="mt-2 text-gray-600">
          Your reservation has been successfully placed.
        </p>
      </div>
    </div>
  );
}
