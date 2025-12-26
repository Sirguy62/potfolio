import { Attraction } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function normalizeAttraction(p: any): Attraction {
  return {
    id: p.id,
    name: p.name,
    description: p.shortDescription,
    image: p.primaryPhoto?.small ?? null,
    price: p.representativePrice?.publicAmount ?? null,
    currency: p.representativePrice?.currency ?? "USD",
    rating: p.numericReviewsStats?.average ?? null,
    reviews: p.numericReviewsStats?.total ?? 0,
    freeCancellation: p.cancellationPolicy?.hasFreeCancellation ?? false,
  };
}
