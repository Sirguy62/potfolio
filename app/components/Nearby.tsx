"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./Loader";
import Image from "next/image";


interface Hotel {
  hotel_id?: string | number;
  id?: string | number;
  hotel_name?: string;
  name?: string;
  city?: string;
  address?: string;
  max_photo_url?: string;
  main_photo_url?: string;
  photo1?: string;
  image_url?: string;

  checkin?: {
    from?: string;
    until?: string;
  };

  checkout?: {
    from?: string;
    until?: string;
  };
}

export default function Nearby() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const mobileSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

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
            console.log("Nearby", data);

            const hotelsList =
              data.result || data.hotels || data.data || data.list || [];

            const limited = Array.isArray(hotelsList)
              ? hotelsList.slice(0, 6)
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
            setError("Location unavailable. Check device privacy settings.");
          if (err.code === 3) setError("Location request timed out.");

          setLoading(false);
        }
      );
    }

    fetchNearby();
  }, []);

  if (loading) {
    return (
      <div className="mt-12">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 w-full text-center mt-12">{error}</p>;
  }

  return (
    <div className="flex justify-center items-center flex-col px-4">
      <h2 className="text-3xl text-black font-bold mb-6">Hotels Near You</h2>

      {hotels.length === 0 && (
        <p className="text-center w-full text-red-600">
          No hotels found nearby.
        </p>
      )}

      <div className="block md:hidden w-full">
        <Slider {...mobileSliderSettings}>
          {hotels.map((hotel) => (
            <div key={hotel.hotel_id || hotel.id} className="px-2">
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.hotel_id || hotel.id} hotel={hotel} />
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

function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
      {/* Image */}
      <div className="rounded-lg overflow-hidden mb-4">
        <Image
          src={
            hotel.max_photo_url ||
            hotel.main_photo_url ||
            hotel.photo1 ||
            hotel.image_url ||
            "/images/good.jpg"
          }
          alt={hotel.hotel_name || hotel.name || "Hotel Image"}
          className="w-full h-48 object-cover"
          loading="lazy"
          width={80}
          height={80}
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">
        {hotel.hotel_name || hotel.name || "Unnamed Hotel"}
      </h3>
      <div className="flex items-center gap-1 ">
        <h3 className="text-gray-600 font-semibold"> Address:</h3>
        <p className="text-sm text-gray-600 text-center truncate">
          {hotel.address}
        </p>
      </div>
      <div className="flex items-center gap-1 ">
        <h3 className="text-gray-600 font-semibold">City:</h3>
        <p className="text-sm text-gray-600 text-center">{hotel.city}</p>
      </div>
      {(hotel.checkin || hotel.checkout) && (
        <div className="text-sm text-gray-700 space-y-1">
          {hotel.checkin?.from && hotel.checkin?.until && (
            <p>
              <span className="font-semibold">Check-in:</span>
              {hotel.checkin.from} – {hotel.checkin.until}
            </p>
          )}

          {hotel.checkout?.from && hotel.checkout?.until && (
            <p>
              <span className="font-semibold">Check-out:</span>{" "}
              {hotel.checkout.from} – {hotel.checkout.until}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
