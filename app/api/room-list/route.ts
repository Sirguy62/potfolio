// app/api/hotel-room-list/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const hotel_id = searchParams.get("hotel_id");
  const checkin = searchParams.get("checkin_date");
  const checkout = searchParams.get("checkout_date");

  if (!hotel_id) {
    return NextResponse.json(
      { error: "hotel_id is required" },
      { status: 400 }
    );
  }

  const url = `https://booking-com.p.rapidapi.com/v2/hotels/room-list?hotel_id=${hotel_id}&checkin_date=${checkin}&checkout_date=${checkout}&currency=AED&locale=en-gb`;

  const res = await fetch(url, {
    headers: {
      "x-rapidapi-key": process.env.RAPID_KEY!,
      "x-rapidapi-host": "booking-com.p.rapidapi.com",
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
