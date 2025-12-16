import { normalizeAttraction } from "./normalize";
import { Attraction } from "./types";

type GetAttractionsParams = {
  destId: string;
  startDate: string;
  endDate: string;
};

export async function getAttractions({
  destId,
  startDate,
  endDate,
}: GetAttractionsParams): Promise<Attraction[]> {
  const res = await fetch(
    `https://booking-com.p.rapidapi.com/v1/attractions/search?dest_id=${destId}&start_date=${startDate}&end_date=${endDate}&order_by=attr_book_score&page_number=0&locale=en-gb&currency=AED`,
    {
      headers: {
        "x-rapidapi-host": process.env.RAPID_HOST!,
        "x-rapidapi-key": process.env.RAPID_KEY!,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`RapidAPI error: ${text}`);
  }

  const raw = await res.json();

  return raw.products.map(normalizeAttraction);
}
