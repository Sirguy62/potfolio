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

// app/types/flight.ts
export type ExpiredOfferSnapshot = {
  offerToken: string;
  departureTime: string;
  arrivalTime: string;
  stops: number;
};



/**
 * ✅ FINAL normalized flight shape
 * This is the ONLY type used by FlightCard, FlightResults, Details, state
 */
export type NormalizedFlight = {
  offerToken: string;

  airline: Carrier;

  departureAirport: Airport;
  arrivalAirport: Airport;

  departureTime: string;
  arrivalTime: string;

  durationText: string;
  stops: number;

  /** 🔑 ALWAYS an array — never optional */
  layovers: string[];

  cabinClass: string;

  price: Price | null;

  badge?: FlightBadge;
};
