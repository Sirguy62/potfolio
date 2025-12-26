import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json({ error: "Missing coordinates" }, { status: 400 });
  }

  const host = process.env.RAPID_HOST;
  const key = process.env.RAPID_KEY;

  if (!host || !key) {
    return NextResponse.json(
      { error: "Missing RapidAPI credentials" },
      { status: 500 }
    );
  }

  try {
    const url =
      `https://${host}/v1/hotels/search-by-coordinates?` +
      new URLSearchParams({
        latitude: lat,
        longitude: lon,
        adults_number: "1",
        room_number: "1",
        page_number: "0",
        units: "metric",
        order_by: "popularity",
        include_adjacency: "true",
        checkin_date: getDate(1),
        checkout_date: getDate(2),
        locale: "en-gb",
        filter_by_currency: "USD",
      });

    const res = await fetch(url, {
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": host,
      },
      cache: "no-store",
    });

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error("Coordinate hotel error:", err);
    return NextResponse.json(
      { error: "Failed to fetch nearby hotels" },
      { status: 500 }
    );
  }
}

function getDate(offset: number) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().split("T")[0];
}
