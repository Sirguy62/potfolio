import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const host = process.env.RAPID_HOST;
  const key = process.env.RAPID_KEY;

  if (!id) {
    return NextResponse.json({ error: "Missing hotel ID" }, { status: 400 });
  }

  if (!host || !key) {
    return NextResponse.json(
      { error: "Missing RapidAPI keys" },
      { status: 500 }
    );
  }

  try {
    const url = `https://${host}/v1/hotels/data?hotel_id=${id}&locale=en-gb`;

    const res = await fetch(url, {
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": host,
      },
    });

    const data = await res.json();

    console.log("SINGLE HOTEL API RESPONSE:", data);

    return NextResponse.json(data);
  } catch (err) {
    console.error("SINGLE HOTEL FETCH ERROR:", err);
    return NextResponse.json(
      { error: "Failed to fetch hotel details" },
      { status: 500 }
    );
  }
}
