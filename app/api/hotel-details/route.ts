import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const dest_id = searchParams.get("dest_id");
  const dest_type = searchParams.get("dest_type");
  const checkin_date = searchParams.get("checkin_date");
  const checkout_date = searchParams.get("checkout_date");
  const adults = searchParams.get("adults") ?? "1";
  const page = searchParams.get("page") ?? "0";


  // ✅ pagination params
  const offset = searchParams.get("offset") ?? "0";
  const rows = searchParams.get("rows") ?? "10";

  const host = process.env.RAPID_HOST;
  const key = process.env.RAPID_KEY;

  if (!host || !key) {
    return NextResponse.json(
      { error: "Missing RapidAPI credentials" },
      { status: 500 }
    );
  }

  if (!dest_id || !dest_type) {
    return NextResponse.json(
      { error: "Missing destination parameters" },
      { status: 400 }
    );
  }

  try {
    const url =
      `https://${host}/v1/hotels/search?` +
      new URLSearchParams({
        adults_number: adults,
        checkin_date: checkin_date!,
        checkout_date: checkout_date!,
        dest_type,
        dest_id,
        units: "metric",
        page_number: page,
        order_by: "popularity",
        include_adjacency: "true",
        room_number: "1",
        filter_by_currency: "USD",
        locale: "en-gb",
        offset,
        rows,
      });

    const response = await fetch(url, {
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": host,
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("HOTEL SEARCH API ERROR:", err);
    return NextResponse.json(
      { error: "Failed to fetch hotel details" },
      { status: 500 }
    );
  }
}
