import { NextResponse } from "next/server";

function isValidDate(date: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const hotelId = searchParams.get("hotel_id");
  const checkin = searchParams.get("checkin_date");
  const checkout = searchParams.get("checkout_date");

  if (!hotelId || !checkin || !checkout) {
    return NextResponse.json(
      { error: "Missing required params" },
      { status: 400 }
    );
  }

  if (!isValidDate(checkin) || !isValidDate(checkout)) {
    return NextResponse.json(
      { error: "Invalid date format. Use YYYY-MM-DD" },
      { status: 400 }
    );
  }

  const url =
    "https://booking-com.p.rapidapi.com/v1/hotels/room-list?" +
    new URLSearchParams({
      hotel_id: hotelId,
      checkin_date: checkin,
      checkout_date: checkout,
      locale: "en-gb",
      currency: "USD",
      units: "metric",
      room_number: "1",
      adults_number_by_rooms: "2,0",
    }).toString();

  const res = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY!,
      "X-RapidAPI-Host": process.env.RAPID_HOST!,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("BOOKING API ERROR:", errorText);

    return NextResponse.json(
      { error: "Failed to fetch rooms" },
      { status: res.status }
    );
  }

  const data = await res.json();
  console.log("BOOKING API DATA:", data);

  return NextResponse.json(data);
}
