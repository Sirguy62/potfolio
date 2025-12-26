import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const offerToken = searchParams.get("offerToken");

  if (!offerToken) {
    return NextResponse.json({ error: "Missing offerToken" }, { status: 400 });
  }

  const res = await fetch(
    `https://booking-com.p.rapidapi.com/v1/flights/offer-details?locale=en-gb&currency=AED&offer_token=${offerToken}`,
    {
      headers: {
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
      },
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
