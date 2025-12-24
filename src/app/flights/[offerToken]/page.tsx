"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { matchOffer } from "@/src/lib/matchOffer";
import { ExpiredOfferSnapshot } from "@/src/types/flight";
import Spinner from "@/src/components/Spinner";
// import type { ExpiredOfferSnapshot } from "@/app/types/flight";
// import Spinner from "@/app/components/Spinner";

type Price = {
  units: number;
  currencyCode: string;
};

type Airport = {
  code: string;
};

type Segment = {
  departureAirport: Airport;
  arrivalAirport: Airport;
};

type OfferDetailsResponse = {
  segments?: Segment[];
  priceBreakdown?: {
    total?: Price;
  };
  detail?: string;
};

type SearchSession = {
  searchParams: {
    from: string;
    to: string;
    departDate: string;
    adults: number;
    cabinClass: string;
  };
};

export default function FlightDetailsPage() {
  const { offerToken } = useParams<{ offerToken: string }>();

  const [data, setData] = useState<OfferDetailsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!offerToken) return;

    async function load() {
      const res = await fetch(
        `/api/flights/offer-details?offerToken=${offerToken}`
      );
      const json: OfferDetailsResponse = await res.json();

      if (json?.detail === "SEARCH_GETFLIGHTDETAILS_EXPIRED") {
        await recover();
      } else {
        setData(json);
        setLoading(false);
      }
    }

    async function recover() {
      const sessionRaw = sessionStorage.getItem("flightSearchSession");
      const selectedRaw = sessionStorage.getItem("selectedOffer");

      if (!sessionRaw || !selectedRaw) {
        setMessage("Flight expired. Please search again.");
        setLoading(false);
        return;
      }

      const session: SearchSession = JSON.parse(sessionRaw);
      const expired: ExpiredOfferSnapshot = JSON.parse(selectedRaw);

      const query = new URLSearchParams({
        from: session.searchParams.from,
        to: session.searchParams.to,
        depart_date: session.searchParams.departDate,
        adults: String(session.searchParams.adults),
        cabin_class: session.searchParams.cabinClass,
      });

      const res = await fetch(`/api/flights/search?${query}`);
      const json: { flightOffers?: ExpiredOfferSnapshot[] } = await res.json();

      const matched = matchOffer(expired, json.flightOffers ?? []);

      if (!matched) {
        setMessage("This flight is no longer available.");
        setLoading(false);
        return;
      }

      sessionStorage.setItem(
        "selectedOffer",
        JSON.stringify({
          ...expired,
          offerToken: matched.offerToken,
        })
      );

      const retry = await fetch(
        `/api/flights/offer-details?offerToken=${matched.offerToken}`
      );

      const retryJson: OfferDetailsResponse = await retry.json();
      setData(retryJson);
      setLoading(false);
    }

    load();
  }, [offerToken]);

  if (loading) {
    return (
      <div className="div-6 flex justify-center">{message ?? <Spinner />}</div>
    );
  }

  if (!data) {
    return <p className="p-6">Unable to load flight details.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-bold">Flight details</h1>

      {data.segments?.map((segment, idx) => (
        <div key={idx} className="border rounded-lg p-4">
          <div className="font-semibold">
            {segment.departureAirport.code} → {segment.arrivalAirport.code}
          </div>
        </div>
      ))}

      <div className="border rounded-lg p-4">
        <div>
          Total: {data.priceBreakdown?.total?.units}{" "}
          {data.priceBreakdown?.total?.currencyCode}
        </div>
      </div>

      <button className="w-full bg-green-600 text-white py-3 rounded-lg">
        Continue to booking
      </button>
    </div>
  );
}
