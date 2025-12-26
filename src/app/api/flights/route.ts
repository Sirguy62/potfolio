import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const departDate = searchParams.get("depart_date");

  if (!from || !to || !departDate) {
    return NextResponse.json({ error: "Missing params" }, { status: 400 });
  }

  const url =
    `https://booking-com.p.rapidapi.com/v1/flights/search` +
    `?from_code=${from}` +
    `&to_code=${to}` +
    `&depart_date=${departDate}` +
    `&adults=1` +
    `&children_ages=` +
    `&flight_type=ONEWAY` +
    `&cabin_class=ECONOMY` +
    `&order_by=CHEAPEST` +
    `&page_number=0` +
    `&currency=AED` +
    `&locale=en-gb`;

  const res = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY!,
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data);
}
