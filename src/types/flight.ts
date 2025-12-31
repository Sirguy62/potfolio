export type Airport = {
  code: string;
};

export type Carrier = {
  name: string;
  logo?: string;
};

export type Price = {
  units: number;
  currencyCode: string;
};

export type FlightBadge = "CHEAPEST" | "FASTEST" | "BEST";

export type ExpiredOfferSnapshot = {
  offerToken: string;
  departureTime: string;
  arrivalTime: string;
  stops: number;
};

export type NormalizedFlight = {
  offerToken: string;

  airline: Carrier;

  departureAirport: Airport;
  arrivalAirport: Airport;

  departureTime: string;
  arrivalTime: string;

  durationText: string;
  stops: number;

  layovers: string[];

  cabinClass: string;

  price: Price | null;

  badge?: FlightBadge;
};
