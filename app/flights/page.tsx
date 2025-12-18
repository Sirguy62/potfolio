"use client";

import { useState } from "react";

export default function FlightSearch() {
  const [from, setFrom] = useState("London");
  const [to, setTo] = useState("Paris");
  const [departDate, setDepartDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [cabinClass, setCabinClass] = useState("ECONOMY");
  const [nonStop, setNonStop] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState("");

  async function handleSearch() {
    setLoading(true);
    setError("");
    setResults(null);

    try {
      const res = await fetch(
        `/api/flights/search?from=${from}&to=${to}&depart_date=${departDate}`
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to fetch flights");
      }

      const data = await res.json();
      setResults(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* HERO */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold max-w-3xl mx-auto">
          Discover amazing destinations, book flights and hotels, and find
          exciting activities for unforgettable experiences.
        </h1>
      </div>

      {/* SEARCH CARD */}
      <div className="max-w-6xl mx-auto -mt-16 px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          {/* Tabs */}
          <div className="flex gap-6 border-b pb-3">
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2">
              ✈ Flights
            </button>
            <button className="text-gray-400 cursor-not-allowed">
              🏨 Hotels
            </button>
            <button className="text-gray-400 cursor-not-allowed">
              📍 Activities
            </button>
          </div>

          {/* Trip Type */}
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-700">
              One Way
            </button>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white">
              Round Trip
            </button>
          </div>

          {/* FORM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <input
              className="border rounded-md px-4 py-3"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />

            <input
              className="border rounded-md px-4 py-3"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />

            <input
              type="date"
              className="border rounded-md px-4 py-3"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
            />

            <input
              type="date"
              className="border rounded-md px-4 py-3"
              disabled
              placeholder="Return"
            />

            <select
              className="border rounded-md px-4 py-3"
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
            >
              <option value={1}>1 adult</option>
              <option value={2}>2 adults</option>
              <option value={3}>3 adults</option>
            </select>

            <select
              className="border rounded-md px-4 py-3"
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value)}
            >
              <option value="ECONOMY">Economy</option>
              <option value="BUSINESS">Business</option>
              <option value="FIRST">First</option>
            </select>
          </div>

          {/* OPTIONS */}
          <div className="flex items-center gap-6">
            <select className="border rounded-md px-4 py-2">
              <option>🇳🇬 NGN</option>
              <option>🇦🇪 AED</option>
              <option>🇺🇸 USD</option>
            </select>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={nonStop}
                onChange={() => setNonStop(!nonStop)}
              />
              <span>Non-stop</span>
            </label>
          </div>

          {/* SEARCH BUTTON */}
          <button
            onClick={handleSearch}
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-md transition"
          >
            {loading ? "Searching..." : "Search Flights"}
          </button>
        </div>
      </div>

      {/* RESULTS */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        {error && (
          <p className="text-red-500 font-medium text-center">{error}</p>
        )}

        {results && (
          <pre className="bg-white rounded-lg p-4 text-sm overflow-x-auto shadow">
            {JSON.stringify(results, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
