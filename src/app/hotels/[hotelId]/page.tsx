"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { saveBooking, getBooking } from "@/src/lib/booking";
import Spinner from "@/src/components/Spinner";

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
  const { hotelId } = useParams<{ hotelId: string }>();
  const router = useRouter();

  const [rooms, setRooms] = useState<RoomBlock[]>([]);
  const [loading, setLoading] = useState(true);

  const [booking, setBooking] = useState<{
    checkin_date: string;
    checkout_date: string;
    adults?: number;
  } | null>(null);

  useEffect(() => {
    const data = getBooking();

    if (!data) {
      router.replace("/hotels");
      return;
    }

    setBooking(data);
  }, [router]);

  useEffect(() => {
    if (!booking || !hotelId) return;

    async function fetchRooms() {
      try {
        if (!booking) {
          setRooms([]);
          return;
        }

        const res = await fetch(
          `/api/hotel-rooms?hotel_id=${hotelId}&checkin_date=${booking.checkin_date}&checkout_date=${booking.checkout_date}`,
          { cache: "no-store" }
        );

        const data = await res.json();
        const payload = Array.isArray(data) ? data[0] : null;

        if (!payload) {
          setRooms([]);
          return;
        }

        const roomImageMap: Record<string, string> = {};

        Object.entries(payload.rooms || {}).forEach(
          ([roomId, roomData]: any) => {
            if (roomData?.photos?.length) {
              roomImageMap[roomId] = roomData.photos[0].url_original;
            }
          }
        );

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

        setRooms(roomList);
      } catch (err) {
        console.error("Failed to load rooms", err);
        setRooms([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRooms();
  }, [booking, hotelId]);

  if (!booking || loading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <Spinner />
      </div>
    );
  }

  function handleReserve(room: RoomBlock) {
    if (!booking || !hotelId) return;

    saveBooking({
      ...booking,
      room_id: room.block_id,
      price_per_night: room.price,
      currency: room.currency,
    });

    router.push(`/hotels/${hotelId}/rooms/${room.block_id}`);
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <h2 className="text-2xl font-bold text-center text-gray-600 mb-6">
        Available Rooms
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {rooms.map((room) => (
          <div
            key={room.block_id}
            className="bg-white shadow rounded-lg p-4 flex flex-col"
          >
            {room.image && (
              <Image
                src={room.image}
                alt={room.name}
                className="rounded mb-3 h-48 w-full object-cover"
                width={300}
                height={200}
              />
            )}

            <h3 className="font-semibold text-lg text-gray-600">{room.name}</h3>

            {room.mealplan && (
              <p className="text-sm text-gray-600">
                Meal plan: {room.mealplan}
              </p>
            )}

            {room.maxGuests && (
              <p className="text-sm text-gray-600">
                Max guests: {room.maxGuests}
              </p>
            )}

            {room.price && (
              <p className="text-indigo-600 font-semibold">
                {room.currency} {room.price} / night
              </p>
            )}

            <button
              onClick={() => handleReserve(room)}
              className="w-full mt-4 border border-indigo-600 text-indigo-600 py-2 rounded hover:bg-indigo-50"
            >
              Reserve Room
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
