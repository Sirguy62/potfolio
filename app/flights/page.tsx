"use client";

import { useEffect, useState } from "react";

type Price = {
  units: number;
  nanos?: number;
  currencyCode: string;
};

export default function FlightsPage() {
  const [flights, setFlights] = useState<any[]>([]);
  const [priceMap, setPriceMap] = useState<Record<string, Price>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFlights() {
      const res = await fetch(
        `/api/flights/search?from=ONT.AIRPORT&to=NYC.CITY&depart_date=2026-03-15`
      );

      const data = await res.json();
      console.log("FULL API RESPONSE:", data);

      /** -----------------------------
       * 1️⃣ Build price lookup by offerToken
       * ------------------------------*/
      const deals = data?.flightDeals ?? [];
      const dealsByToken: Record<string, Price> = {};

      for (const deal of deals) {
        if (deal.offerToken && deal.price) {
          dealsByToken[deal.offerToken] = deal.price;
        }
      }

      /** -----------------------------
       * 2️⃣ Store real flights (flightOffers)
       * ------------------------------*/
      setPriceMap(dealsByToken);
      setFlights(data?.flightOffers ?? []);
      setLoading(false);
    }

    fetchFlights();
  }, []);

  if (loading) {
    return <p className="p-6">Loading flights…</p>;
  }

  if (!flights.length) {
    return <p className="p-6">No flights found</p>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Available Flights</h1>

      {flights.map((flight, i) => {
        const segment = flight.segments?.[0];
        if (!segment) return null;

        /** -----------------------------
         * Stops = legs - 1
         * ------------------------------*/
        const stops = Math.max((segment.legs?.length || 1) - 1, 0);

        /** -----------------------------
         * Price (joined from flightDeals)
         * ------------------------------*/
        const price =
          flight.travellerPrices?.[0]?.price ?? priceMap[flight.offerToken];

        return (
          <div
            key={i}
            className="border rounded-lg p-4 bg-black text-white space-y-2"
          >
            {/* Route + Price */}
            <div className="flex justify-between items-center">
              <span className="font-semibold">
                {segment.departureAirport.code} → {segment.arrivalAirport.code}
              </span>

              <span className="font-bold">
                {price ? `${price.units} ${price.currencyCode}` : "—"}
              </span>
            </div>

            {/* Time */}
            <div className="text-sm text-gray-400">
              {new Date(segment.departureTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
              {" – "}
              {new Date(segment.arrivalTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>

            {/* Stops */}
            <div className="text-sm">
              {stops === 0
                ? "Non-stop"
                : `${stops} stop${stops > 1 ? "s" : ""}`}
            </div>
          </div>
        );
      })}
    </div>
  );
}
