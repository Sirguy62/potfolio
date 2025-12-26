"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { clearBooking, getBooking } from "@/lib/booking";
import { calculateNights, calculateTotal } from "@/lib/pricing";
// import { getBooking, clearBooking } from "@/src/lib/booking";
// import { calculateNights, calculateTotal } from "@/src/lib/pricing";

type Booking = {
  checkin_date: string;
  checkout_date: string;
  adults?: number;
  price_per_night?: number;
  currency?: string;
};

export default function CheckoutClient() {
  const { hotelId, roomId } = useParams<{
    hotelId: string;
    roomId: string;
  }>();

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState<Booking | null>(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: 1,
  });

  useEffect(() => {
    const data = getBooking();
    if (!data) {
      router.replace("/hotels");
      return;
    }
    setBooking(data);
  }, [router]);

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading booking...
      </div>
    );
  }

  const nights = calculateNights(booking.checkin_date, booking.checkout_date);

  const pricing =
    booking.price_per_night && booking.currency
      ? calculateTotal(booking.price_per_night, nights)
      : null;

  async function handleSubmit() {
    setLoading(true);

    console.log("BOOKING DATA:", {
      hotelId,
      roomId,
      ...booking,
      ...form,
    });

    setTimeout(() => {
      clearBooking();
      router.push("/success");
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-4">
        <h1 className="text-2xl font-bold text-gray-600 text-center">
          Checkout
        </h1>

        <p className="text-sm text-center text-gray-600">
          Stay: <strong>{booking.checkin_date}</strong> →{" "}
          <strong>{booking.checkout_date}</strong>
        </p>

        {pricing && (
          <div className="border rounded-lg p-4 bg-gray-50 space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Price per night</span>
              <span>
                {booking.currency} {booking.price_per_night}
              </span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Nights</span>
              <span>{nights}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>
                {booking.currency} {pricing.subtotal}
              </span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Taxes & fees</span>
              <span>
                {booking.currency} {pricing.taxes}
              </span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-lg text-gray-600">
              <span>Total</span>
              <span>
                {booking.currency} {pricing.total}
              </span>
            </div>
          </div>
        )}

        <input
          name="fullName"
          placeholder="Full name"
          className="w-full border rounded p-2 text-gray-600"
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border rounded p-2 text-gray-600"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          name="phone"
          placeholder="Phone"
          className="w-full border rounded p-2 text-gray-600"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg"
        >
          {loading ? "Processing..." : "Confirm Booking"}
        </button>
      </div>
    </div>
  );
}
