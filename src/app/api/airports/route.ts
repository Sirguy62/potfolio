import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query || query.length < 2) {
    return NextResponse.json({ data: [] });
  }

  
  if (!process.env.RAPID_KEY) {
    return NextResponse.json({ data: [] });
  }

  const url =
    `https://booking-com.p.rapidapi.com/v1/flights/locations` +
    `?name=${encodeURIComponent(query)}` +
    `&locale=en-gb`;

  try {
    const res = await fetch(url, {
      headers: {
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPID_KEY,
      },
    });

    if (!res.ok) {
      console.error("Booking.com airport search failed");
      return NextResponse.json({ data: [] });
    }

    const json = await res.json();

    const results =
      json?.map((item: any) => ({
        id: item.id,
        name: item.name,
        city: item.cityName,
        code: item.code, 
        type: item.type, 
      })) ?? [];

    return NextResponse.json({ data: results });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ data: [] });
  }
}
