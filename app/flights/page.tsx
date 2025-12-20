"use client";

import { useState } from "react";

type Flight = {
  id?: string;
  departureAirport?: { code?: string };
  arrivalAirport?: { code?: string };
  departureTime?: string;
  arrivalTime?: string;
  price?: {
    units?: number;
    currencyCode?: string;
  };
};

export default function FlightsPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [flights, setFlights] = useState<Flight[]>([]);

  async function handleSearch() {
    setLoading(true);
    setError("");
    setFlights([]);

    try {
      const res = await fetch(
        `/api/flights?from=${from}&to=${to}&depart_date=${departDate}`
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to fetch flights");
        return;
      }

      // Booking.com response usually nests results deeply
      const results =
        data?.data?.flightOffers ||
        data?.data ||
        [];

      setFlights(Array.isArray(results) ? results : []);
    } catch (err) {
      setError("Something went wrong while searching flights");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-600">Search Flights</h1>

        {/* Search Form */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              className="border p-3 rounded text-gray-600"
              placeholder="From (IATA e.g. LHR)"
              value={from}
              onChange={(e) => setFrom(e.target.value.toUpperCase())}
            />

            <input
              className="border p-3 rounded text-gray-600"
              placeholder="To (IATA e.g. JFK)"
              value={to}
              onChange={(e) => setTo(e.target.value.toUpperCase())}
            />

            <input
              type="date"
              className="border p-3 rounded text-gray-600"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
            />
          </div>

          <button
            onClick={handleSearch}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Searching..." : "Search Flights"}
          </button>

          {error && <p className="text-red-600">{error}</p>}
        </div>

        {/* Results */}
        <div className="mt-8 space-y-4">
          {flights.length === 0 && !loading && (
            <p className="text-gray-600 text-center">
              No flights found
            </p>
          )}

          {flights.map((flight, idx) => (
            <div
              key={flight.id || idx}
              className="bg-white p-5 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-gray-600">
                  {flight.departureAirport?.code} →{" "}
                  {flight.arrivalAirport?.code}
                </p>
                <p className="text-sm text-gray-600">
                  {flight.departureTime} – {flight.arrivalTime}
                </p>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold">
                  {flight.price?.units ?? "—"}{" "}
                  {flight.price?.currencyCode ?? ""}
                </p>
                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
