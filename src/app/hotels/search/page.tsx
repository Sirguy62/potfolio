"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import Image from "next/image";
import HotelSearch from "@/components/HotelSearch";
import Loader from "@/components/Loader";
import { getBooking } from "@/lib/booking";
// import { getBooking } from "@/src/lib/booking";
// import Loader from "@/src/components/Loader";
// import HotelSearch from "@/src/components/HotelSearch";

const PAGE_SIZE = 5;

export default function HotelsResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
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
    if (!booking) return;

    async function fetchHotels() {
      setLoading(true);

      const params = new URLSearchParams(searchParams.toString());

      // 🔑 pagination
      params.set("offset", ((page - 1) * PAGE_SIZE).toString());
      params.set("rows", PAGE_SIZE.toString());

      // ✅ inject dates from sessionStorage
      params.set("checkin_date", booking?.checkin_date || "");
      params.set("checkout_date", booking?.checkout_date || "");
      params.set("adults", String(booking?.adults || 1));

      const res = await fetch(`/api/hotel-details?${params.toString()}`, {
        cache: "no-store",
      });

      const data = await res.json();
      setHotels(Array.isArray(data.result) ? data.result : []);
      setLoading(false);
    }

    fetchHotels();
  }, [booking, searchParams, page]);

  if (loading || !booking)
    return (
      <div className="flex min-h-screen justify-center items-center my-auto h-full">
        <Loader />
      </div>
    );

  return (
    <div className="max-w-full  mx-auto p-6 bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <div>
        <HotelSearch />
      </div>

      <h2 className="text-2xl text-gray-600 text-center font-bold my-2">
        Hotels Found
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <Link
            key={hotel.hotel_id}
            href={`/hotels/${hotel.hotel_id}?${searchParams.toString()}`}
            className="border rounded-lg p-4 bg-white hover:shadow-lg transition"
          >
            <Image
              src={
                hotel.max_1440_photo_url ||
                hotel.main_photo_url ||
                "/images/hotel-placeholder.jpg"
              }
              alt={hotel.hotel_name}
              className="rounded w-full h-52 object-cover mb-3"
              loading="lazy"
              width={100}
              height={100}
            />

            <h3 className="font-semibold text-xl text-gray-800">
              {hotel.hotel_name}
            </h3>
            <div className="flex items-center gap-1 ">
              <h3 className="text-gray-600 font-semibold">Address:</h3>
              <p className="text-sm text-gray-600 text-center truncate">
                {hotel.address || "No address"}
              </p>
            </div>
            <div className="flex items-center gap-1 ">
              <h3 className="text-gray-600 font-semibold">
                Type Of Accomodation:
              </h3>
              <p className="text-sm text-gray-600 text-center truncate">
                {hotel.accommodation_type_name || "No address"}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <h3 className="text-gray-600 font-semibold">Rating:</h3>
              <div className="flex items-center justify-center ">
                <span className="text-sm flex items-center text-gray-600">
                  {hotel.review_score || "N/A"}
                </span>
                <CiStar className="text-yellow-500" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="font-semibold">Page {page}</span>

        <button
          disabled={hotels.length < PAGE_SIZE}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
