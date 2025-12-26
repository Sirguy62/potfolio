import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query || query.length < 2) {
    return NextResponse.json([]);
  }

  try {
    const res = await fetch(
      `https://booking-com.p.rapidapi.com/v1/flights/locations?name=${encodeURIComponent(
        query
      )}&locale=en-gb`,
      {
        headers: {
          "x-rapidapi-host": "booking-com.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPID_KEY!,
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json([], { status: res.status });
    }

    const data = await res.json();

    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const locations = (data ?? []).map((item: any) => ({
      label: `${item.cityName} (${item.short_code})`,
      code: item.code,
      airportCode: item.short_code, 
      city: item.cityName,
      country: item.countryName,
      type: item.type,
    }));

    return NextResponse.json(locations);
  } catch (error) {
    console.error("Locations API error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
