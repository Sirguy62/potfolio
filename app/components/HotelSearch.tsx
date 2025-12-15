"use client";

import Spinner from "@/app/components/Spinner";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LocationResult {
  dest_id: string;
  type: string;
  label: string;
}

const TYPE_MAP: Record<string, { search_type: string; dest_type: string }> = {
  ci: { search_type: "city", dest_type: "city" },
  ho: { search_type: "hotel", dest_type: "hotel" },
};

export default function HotelSearch() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [locations, setLocations] = useState<LocationResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function getDate(offset: number) {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d.toISOString().split("T")[0];
  }

  async function handleSearch() {
    if (!city.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/hotels?city=${city}`);
      const data = await res.json();
      console.log("Hotels", data)
      setLocations(Array.isArray(data) ? data : []);
    } catch {
      setError("Failed to fetch locations");
    } finally {
      setLoading(false);
    }
  }

  function handleLocationClick(loc: LocationResult) {
    const map = TYPE_MAP[loc.type] || TYPE_MAP.ci;

    const params = new URLSearchParams({
      dest_id: loc.dest_id,
      dest_type: map.dest_type,
      search_type: map.search_type,
      checkin_date: getDate(3),
      checkout_date: getDate(5),
      adults: "1",
    });

    router.push(`/hotels/search?${params.toString()}`);
  }

  return (
    <div className="space-y-4 relative">
      <div className="flex w-full gap-4 bg-white p-4 rounded-lg">
        <input
          className="border p-2 w-full text-gray-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city maybe Lagos"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Search
        </button>
      </div>

      {loading && <Spinner />}
      {error && <p className="text-red-600">{error}</p>}

      {locations.length > 0 && (
        <div className="space-y-2 max-h-64 overflow-y-auto w-full p-2 text-gray-500 rounded-lg bg-white shadow-sm absolute">
          {locations.map((loc) => (
            <div
              key={loc.dest_id}
              onClick={() => handleLocationClick(loc)}
              className="p-3 border-b-gray cursor-pointer hover:bg-gray-100"
            >
              {loc.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
