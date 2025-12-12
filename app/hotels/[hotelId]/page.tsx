"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface HotelDetails {
  hotel_name: string;
  address?: string;
  max_photo_url?: string;
  main_photo_url?: string;
  city?: string;
  country_trans?: string;
  distance?: string;
  review_score?: number;
  review_score_word?: string;
}

export default function HotelDetailsPage() {
  const { hotelId } = useParams();
  const [rooms, setRooms] = useState<HotelDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!hotelId) return;

    async function fetchHotelDetails() {
      try {
        const res = await fetch(`/api/hotel-single?id=${hotelId}`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch hotel");

        const data = await res.json();
        console.log("SINGLE HOTEL:", data);

        // Normalize to array
        setRooms(Array.isArray(data) ? data : [data]);
      } catch (err) {
        console.error(err);
        setError("Failed to load hotel");
      } finally {
        setLoading(false);
      }
    }

    fetchHotelDetails();
  }, [hotelId]);

  if (loading) return <p className="p-6">Loading hotel...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;
  if (rooms.length === 0) return <p className="p-6">Hotel not found</p>;

  // 👉 Main hotel info = first object
  const hotel = rooms[0];

  const image =
    hotel.main_photo_url ||
    hotel.max_photo_url ||
    "/images/hotel-placeholder.jpg";

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      {/* Main Image */}
      <img
        src={image}
        alt={hotel.hotel_name}
        className="w-full h-96 object-cover rounded-lg"
      />

      {/* Title */}
      <h1 className="text-2xl font-bold">{hotel.hotel_name}</h1>

      <p className="text-gray-600">{hotel.address}</p>

      {/* Location */}
      <div className="flex gap-4 text-sm text-gray-500">
        {hotel.city && <span>{hotel.city}</span>}
        {hotel.country_trans && <span>{hotel.country_trans}</span>}
        {hotel.distance && <span>{hotel.distance} km away</span>}
      </div>

      {/* Rating */}
      {hotel.review_score && (
        <div className="mt-4 bg-green-600 p-4 rounded">
          <p className="font-bold">Rating: {hotel.review_score} ⭐</p>
          <p>{hotel.review_score_word}</p>
        </div>
      )}

      {/* <div className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold">Rooms</h2>

        {rooms.map((room, index) => (
          <div key={index} className="p-4 bg-gray-900 rounded-lg">
         
            <p className="font-bold">Room {index + 1}</p>
            {room.review_score && (
              <p className="text-sm mt-1">Rating: {room.review_score} ⭐</p>
            )}
        
          </div>
        ))}
      </div> */}
    </div>
  );
}
