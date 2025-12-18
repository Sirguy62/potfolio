"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Spinner from "@/app/components/Spinner";
import Image from "next/image";


function formatDate(date: Date) {
  return date.toISOString().split("T")[0];
}

type RoomBlock = {
  block_id: string;
  name: string;
  price?: number;
  currency?: string;
  maxGuests?: number;
  image?: string;
  mealplan?: string;
};

export default function HotelDetailsPage() {
  const params = useParams();
  const hotelId = params?.hotelId as string;

  const [rooms, setRooms] = useState<RoomBlock[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Calculate dates ONCE
  const checkin = formatDate(new Date());
  const checkout = formatDate(new Date(Date.now() + 24 * 60 * 60 * 1000));

  useEffect(() => {
    if (!hotelId) return;

    async function fetchRooms() {
      try {
        const res = await fetch(
          `/api/hotel-rooms?hotel_id=${hotelId}&checkin_date=${checkin}&checkout_date=${checkout}`,
          { cache: "no-store" }
        );

        const data = await res.json();

        // Booking.com returns an ARRAY
        const payload = Array.isArray(data) ? data[0] : null;

        if (!payload) {
          setRooms([]);
          return;
        }

        // 🔥 Map room_id -> image
        const roomImageMap: Record<string, string> = {};

        Object.entries(payload.rooms || {}).forEach(
          ([roomId, roomData]: any) => {
            if (Array.isArray(roomData.photos) && roomData.photos.length > 0) {
              roomImageMap[roomId] = roomData.photos[0].url_original;
            }
          }
        );

        // 🔥 Build final room list
        const roomList: RoomBlock[] = Array.isArray(payload.block)
          ? payload.block.map((block: any) => ({
              block_id: block.block_id,
              name: block.room_name || "Room",
              price: block.min_price?.price,
              currency: block.min_price?.currency || payload.currency_code,
              maxGuests: block.max_occupancy,
              image: roomImageMap[block.room_id],
              mealplan: block.mealplan,
            }))
          : [];
        console.log("Rooms", roomList);
        setRooms(roomList);
      } catch (error) {
        console.error("Failed to load rooms", error);
        setRooms([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRooms();
  }, [hotelId, checkin, checkout]); // ✅ correct dependencies

  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center mx-auto p-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <h2 className="text-2xl text-gray-700 text-center w-full font-bold mb-6">
        Available Rooms
      </h2>

      {rooms.length === 0 && (
        <p className="text-gray-700 w-full text-center">
          No rooms available for the selected dates.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {rooms.map((room) => (
          <div
            key={room.block_id}
            className="shadow-md rounded-lg p-4 bg-white text-black flex flex-col"
          >
            {room.image && (
              <Image
                src={room.image}
                alt={room.name}
                className="rounded-md mb-3 object-cover h-48 w-full"
                loading="lazy"
                width={80}
                height={80}
              />
            )}

            <h3 className="font-semibold text-lg mb-1">{room.name}</h3>

            {room.mealplan && (
              <p className="text-sm text-gray-600 mb-1">
                Meal plan: {room.mealplan}
              </p>
            )}

            {room.maxGuests && (
              <p className="text-sm text-gray-600 mb-2">
                Max guests: {room.maxGuests}
              </p>
            )}

            {room.price && (
              <p className="font-semibold text-indigo-600 mb-3">
                {room.currency} {room.price} / night
              </p>
            )}

            {/* 👉 Room Single Page with dates */}
            <Link
              href={`/hotels/${hotelId}/rooms/${room.block_id}?checkin=${checkin}&checkout=${checkout}`}
            >
              <button className="mt-auto w-full py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
                Reserve Room
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
