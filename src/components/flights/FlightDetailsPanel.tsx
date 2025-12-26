/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FlightDetailsPanel({ offer }: { offer: any }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setLoading(true);
      const res = await fetch(
        `/api/flights/offer-details?offerToken=${offer.offerToken}`
      );
      const json = await res.json();

      if (mounted) {
        setData(json);
        setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, [offer.offerToken]);

  if (loading) {
    return <div className="p-6">Loading details…</div>;
  }

  return (
    <div className="border rounded-xl p-6 space-y-4 sticky top-6">
      <h2 className="text-lg font-bold text-gray-600">Flight details</h2>

      {data.segments?.map((segment: any, i: number) => (
        <div key={i} className="border-b pb-3">
          <div className="font-medium">
            {segment.departureAirport.code} → {segment.arrivalAirport.code}
          </div>
          <div className="text-sm text-gray-600">
            Duration: {segment.totalTime} mins
          </div>
        </div>
      ))}

      <div className="font-semibold text-gray-600">
        Total: {data.priceBreakdown?.total?.units}
        {data.priceBreakdown?.total?.currencyCode}
      </div>

      <button className="w-full bg-green-600 text-white py-3 rounded-lg">
        Continue to booking
      </button>
    </div>
  );
}
