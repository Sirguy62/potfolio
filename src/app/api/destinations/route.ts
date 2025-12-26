import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json([], { status: 200 });
  }

  const res = await fetch(
    `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${encodeURIComponent(
      query
    )}&locale=en-gb`,
    {
      headers: {
        "x-rapidapi-key": process.env.RAPID_KEY!,
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
      },
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch destinations" },
      { status: 500 }
    );
  }

  const data = await res.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const destinations = data.map((d: any) => ({
    label: `${d.name}, ${d.country}`,
    destId: d.dest_id,
  }));

  return NextResponse.json(destinations);
}
