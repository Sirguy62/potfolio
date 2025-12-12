

import { NextResponse } from "next/server";

export async function GET(req: Request): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);

  const city = searchParams.get("city");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const host = process.env.RAPID_HOST; // booking-com.p.rapidapi.com
  const key = process.env.RAPID_KEY;

  if (!host || !key) {
    return NextResponse.json(
      { error: "Missing RapidAPI credentials" },
      { status: 500 }
    );
  }

  try {
    // 🔎 City search
    if (city) {
      const url = `https://${host}/v1/hotels/locations?name=${encodeURIComponent(
        city
      )}&locale=en-gb`;

      const res = await fetch(url, {
        headers: {
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": host,
        },
      });

      const data = await res.json();
      console.log("LOCATION RESPONSE:", data);

      return NextResponse.json(Array.isArray(data) ? data : []);
    }

    // 📍 GPS Search
    if (lat && lon) {
      const url = `https://${host}/v1/hotels/locations?latitude=${lat}&longitude=${lon}&locale=en-gb`;

      const res = await fetch(url, {
        headers: {
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": host,
        },
      });

      const data = await res.json();
      console.log("LOCATION RESPONSE (GPS):", data);

      return NextResponse.json(Array.isArray(data) ? data : []);
    }

    return NextResponse.json([]);
  } catch (err) {
    console.error("API ERROR:", err);
    return NextResponse.json([], { status: 500 });
  }
}