"use client";

import Spinner from "@/app/components/Spinner";
import Link from "next/link";
import { useState } from "react";

interface LocationResult {
  dest_id: string;
  type: string; // "ci" | "ho"
  label: string;
  image_url?: string;
}

interface HotelResult {
  id: string;
  hotel_name: string;
  address?: string;
  main_photo_url?: string;
  max_photo_url?: string;
  photo1?: string;
  image_url?: string;
  // hotel_id?: string;
}

const TYPE_MAP: Record<string, { search_type: string; dest_type: string }> = {
  ci: { search_type: "city", dest_type: "city" },
  ho: { search_type: "hotel", dest_type: "hotel" },
};

export default function HotelSearch() {
  const [city, setCity] = useState("");
  const [locations, setLocations] = useState<LocationResult[]>([]);
  const [hotels, setHotels] = useState<HotelResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchLocation(params: any) {
    setLoading(true);
    setError("");
    setHotels([]);

    const query = new URLSearchParams(params).toString();

    try {
      const res = await fetch(`/api/hotels?${query}`);
      if (!res.ok) throw new Error("Failed to fetch locations");

      const data = await res.json();
      console.log("LOCATION RESPONSE:", data);

      setLocations(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch locations.");
      setLocations([]);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch() {
    if (!city.trim()) {
      setError("City name cannot be empty");
      return;
    }
    searchLocation({ city });
  }

  async function findNearMe() {
    if (!navigator.geolocation) {
      setError("Geolocation not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        console.log("User location:", lat, lon);

        setLoading(true);
        setError("");

        try {
          const res = await fetch(
            `/api/search-by-coordinates?lat=${lat}&lon=${lon}`,
            { cache: "no-store" }
          );

          const data = await res.json();
          console.log("NEAR ME HOTELS:", data);

          const hotelsList =
            data.result || data.hotels || data.data || data.list || [];

          setHotels(Array.isArray(hotelsList) ? hotelsList : []);
        } catch (e) {
          console.error(e);
          setError("Failed to fetch nearby hotels.");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.error("GEO ERROR:", err.code, err.message);
        if (err.code === 1) setError("Permission denied.");
        if (err.code === 2)
          setError("Location unavailable. Check macOS Settings.");
        if (err.code === 3) setError("Location request timed out.");
      }
    );
  }

  function getDate(offsetDays: number) {
    const date = new Date();
    date.setDate(date.getDate() + offsetDays);
    return date.toISOString().split("T")[0];
  }

  async function fetchHotelsForLocation(location: LocationResult) {
    setLoading(true);
    setError("");

    const map = TYPE_MAP[location.type] || TYPE_MAP["ci"];

    const params = {
      dest_id: location.dest_id,
      dest_type: map.dest_type,
      search_type: map.search_type,
      checkin_date: getDate(3),
      checkout_date: getDate(5),
      adults: "1",
    };

    const query = new URLSearchParams(params).toString();

    try {
      const res = await fetch(`/api/hotel-details?${query}`);
      if (!res.ok) throw new Error("Failed to fetch hotel details");

      const data = await res.json();
      console.log("HOTEL RESPONSE:", data);

      setHotels(Array.isArray(data.result) ? data.result : []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch hotel details.");
      setHotels([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-12 max-w-3xl lg:w-full mx-auto space-y-4">
      <div className="flex justify-center items-center w-full gap-4 bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
        <input
          className="border text-lg text-gray-600 rounded p-2 w-full"
          placeholder="Enter city e.g. New York"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 max-w-34 text-white p-2 rounded w-full hover:cursor-pointer"
        >
          Search by City
        </button>

        {/* <button
          onClick={findNearMe}
          className="bg-green-600 text-white p-2 rounded w-full"
        >
          Find Hotels Near Me
        </button> */}
      </div>

      {loading && (
        <div className="w-full text-center">
          <Spinner />
        </div>
      )}
      {error && <p className="text-red-600">{error}</p>}

      {locations.length > 0 && (
        <div className="mt-4 relative flex flex-col items-center">
          <h2 className="font-bold mb-2 w-full text-center">
            Select a Location
          </h2>

          <div className="space-y-4 max-h-64 overflow-y-auto w-full p-2 border rounded-lg bg-white shadow-sm z-50 absolute">
            {locations.map((loc, i) => (
              <div
                key={i}
                className="p-4 border rounded cursor-pointer hover:bg-gray-100 transition"
                onClick={() => fetchHotelsForLocation(loc)}
              >
                <h3 className="font-semibold text-gray-600">{loc.label}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {hotels.length > 0 && (
        <div className="space-y-4 mt-6">
          <h2 className="font-bold">Hotels Found</h2>

          {hotels.map((hotel) => {
            const image =
              hotel.max_photo_url ||
              hotel.main_photo_url ||
              hotel.photo1 ||
              hotel.image_url ||
              "/images/hotel-placeholder.jpg";

            return (
              <Link href={`/hotels/${hotel.hotel_id}`} key={hotel.hotel_id}>
                <div className="flex gap-4 p-4 border rounded-lg shadow-sm bg-white">
                  <img
                    src={image}
                    alt={hotel.hotel_name}
                    className="w-28 h-28 object-cover rounded-lg"
                  />

                  <div>
                    <h3 className="font-bold text-lg">{hotel.hotel_name}</h3>
                    <p className="text-gray-600 text-sm">
                      {hotel.address || "No address provided"}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
