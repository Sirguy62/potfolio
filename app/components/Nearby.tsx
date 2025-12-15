"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "./Loader";

export default function Nearby() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNearby() {
      if (!navigator.geolocation) {
        setError("Geolocation not supported.");
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          setLoading(true);
          setError("");

          try {
            const res = await fetch(
              `/api/search-by-coordinates?lat=${lat}&lon=${lon}`,
              { cache: "no-store" }
            );

            const data = await res.json();

            // console.log("Location", data);

            const hotelsList =
              data.result || data.hotels || data.data || data.list || [];

            const limited = Array.isArray(hotelsList)
              ? hotelsList.slice(0, 3)
              : [];

            setHotels(limited);
          } catch (err) {
            console.error(err);
            setError("Failed to load nearby hotels.");
          } finally {
            setLoading(false);
          }
        },

        (err) => {
          console.error("GEO ERROR:", err.code, err.message);

          if (err.code === 1) setError("Location permission denied.");
          if (err.code === 2)
            setError(
              "Location unavailable. Check device privacy settings to fetch hotels near you."
            );
          if (err.code === 3) setError("Location request timed out.");

          setLoading(false);
        }
      );
    }

    fetchNearby();
  }, []);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (error)
    return <p className="text-red-500 w-full text-center mt-12">{error}</p>;

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-3xl text-black font-bold mb-6">Hotels Near You</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 hover:cursor-pointer">
        {hotels.length === 0 && (
          <p className="text-center w-full text-red-600">
            No hotels found nearby.
          </p>
        )}

        {hotels.map((hotel: any) => (
          <div
            key={hotel.hotel_id || hotel.id}
            className="bg-white  rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <img
                src={
                  hotel.max_photo_url ||
                  hotel.main_photo_url ||
                  hotel.photo1 ||
                  hotel.image_url ||
                  "/images/good.jpg"
                }
                alt={hotel.hotel_name || hotel.name || "Hotel Image"}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {hotel.hotel_name || hotel.name || "Unnamed Hotel"}
            </h3>

            <p className="text-gray-600">
              Rating: {hotel.review_score || "N/A"}
            </p>
            <p className="text-gray-600">{hotel.city}</p>
          </div>
        ))}
      </div>

      <Link
        href="/hotels"
        className="mt-10 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        See More Hotels
      </Link>
    </div>
  );
}
