"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveBooking } from "@/src/lib/booking";
import Spinner from "./Spinner";

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

  // ✅ CHECK-IN / CHECK-OUT STATE (UI ONLY)
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");

  async function handleSearch() {
    if (!city.trim()) {
      setError("Please enter a city");
      return;
    }

    if (!checkinDate || !checkoutDate) {
      setError("Please select check-in and check-out dates");
      return;
    }

    if (checkoutDate <= checkinDate) {
      setError("Check-out date must be after check-in date");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/hotels?city=${city}`);
      const data = await res.json();
      setLocations(Array.isArray(data) ? data : []);
    } catch {
      setError("Failed to fetch locations");
    } finally {
      setLoading(false);
    }
  }

  function handleLocationClick(loc: LocationResult) {
    saveBooking({
      checkin_date: checkinDate,
      checkout_date: checkoutDate,
      adults: 1,
    });
    const map = TYPE_MAP[loc.type] || TYPE_MAP.ci;

    const params = new URLSearchParams({
      dest_id: loc.dest_id,
      dest_type: map.dest_type,
      search_type: map.search_type,
    });

    router.push(`/hotels/search?${params.toString()}`);
  }

  return (
    <div className="space-y-4 relative w-full">
      <div className=" bg-white p-4 rounded-lg flex flex-col gap-4 lg:flex-row w-full">
        <div className="flex flex-col md:flex-row w-full gap-4">
          <div className="w-full flex flex-col">
            <p className="font-semibold text-gray-600 text-lg">City</p>
            <input
              className="p-2 w-full text-gray-300 border rounded"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city (e.g. Lagos)"
            />
          </div>

          <div className="w-full flex flex-col">
            <p className="font-semibold text-gray-600 text-lg">Checkin</p>
            <input
              type="date"
              value={checkinDate}
              aria-label="checkin"
              onChange={(e) => setCheckinDate(e.target.value)}
              className="p-2 text-gray-300 border  rounded"
            />
          </div>

          <div className="w-full flex flex-col">
            <p className="font-semibold text-gray-600 text-lg">Checkout</p>
            <input
              type="date"
              value={checkoutDate}
              aria-label="checkout"
              onChange={(e) => setCheckoutDate(e.target.value)}
              className="p-2 text-gray-300 border  rounded"
            />
          </div>
        </div>
        <div className=" flex flex-col mt-auto w-full lg:w-auto">
          <p className="font-semibold text-gray-600 text-lg"></p>
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>

      {loading && <Spinner />}
      {error && <p className="text-red-600">{error}</p>}

      {locations.length > 0 && (
        <div className="space-y-2 max-h-64 overflow-y-auto w-full p-2 text-gray-600 rounded-lg bg-white shadow-sm absolute z-10">
          {locations.map((loc) => (
            <div
              key={loc.dest_id}
              onClick={() => handleLocationClick(loc)}
              className="p-3 cursor-pointer hover:bg-gray-100"
            >
              {loc.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
