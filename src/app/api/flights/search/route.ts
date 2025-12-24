import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const departDate = searchParams.get("depart_date");

  console.log("PARAMS RECEIVED:", { from, to, departDate });

  if (!from || !to || !departDate) {
    return NextResponse.json(
      { error: "Missing required query params" },
      { status: 400 }
    );
  }

  const url =
    `https://booking-com.p.rapidapi.com/v1/flights/search` +
    `?from_code=${from}` +
    `&to_code=${to}` +
    `&depart_date=${departDate}` + 
    `&adults=1` +
    `&flight_type=ONEWAY` +
    `&order_by=CHEAPEST` +
    `&cabin_class=ECONOMY` +
    `&currency=AED` +
    `&locale=en-gb`;

  const res = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY!,
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
    cache: "no-store",
  });

  console.log("data", res);

  const data = await res.json();
  return NextResponse.json(data);
}
