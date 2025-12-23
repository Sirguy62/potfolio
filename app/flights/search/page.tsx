// app/flights/search/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FlightSearch from "@/app/components/flights/FlightSearch";
import FlightResults from "@/app/components/flights/FlightResults";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/Spinner";

export default function FlightsSearchPage() {
  const params = useSearchParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [flights, setFlights] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedFlight, setSelectedFlight] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchParams = {
    from: params.get("from"),
    to: params.get("to"),
    departDate: params.get("departDate"),
    adults: Number(params.get("adults") ?? 1),
    cabinClass: params.get("cabinClass") ?? "ECONOMY",
  };

  useEffect(() => {
    async function fetchFlights() {
      setLoading(true);

      const query = new URLSearchParams({
        from: searchParams.from!,
        to: searchParams.to!,
        depart_date: searchParams.departDate!,
        adults: String(searchParams.adults),
        cabin_class: searchParams.cabinClass,
      });

      const res = await fetch(`/api/flights/search?${query}`);
      const json = await res.json();

      setFlights(json.flightOffers ?? []);
      setLoading(false);
    }

    fetchFlights();
  }, [
    searchParams.from,
    searchParams.to,
    searchParams.departDate,
    searchParams.adults,
    searchParams.cabinClass,
  ]);

  return (
    <div className="p-6 space-y-6">
      <FlightSearch
        onSearch={(params) => {
          const query = new URLSearchParams({
            from: params.from.code,
            to: params.to.code,
            departDate: params.departDate,
            adults: String(params.adults),
            cabinClass: params.cabinClass,
          });

          router.push(`/flights/search?${query.toString()}`);
        }}
      />

      {loading && <div className="flex w-full justify-center items-center"><Spinner /></div>}

      {!loading && (
        <FlightResults
          flights={flights}
          selectedFlight={selectedFlight}
          onSelectFlight={setSelectedFlight}
        />
      )}
    </div>
  );
}
