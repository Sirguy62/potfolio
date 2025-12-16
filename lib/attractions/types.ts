export type Attraction = {
  id: string;
  name: string;
  description: string;
  image: string | null;
  price: number | null;
  currency: string;
  rating: number | null;
  reviews: number;
  freeCancellation: boolean;
};
