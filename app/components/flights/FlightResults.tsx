/* eslint-disable @typescript-eslint/no-explicit-any */
import FlightCard from "../FlightCard";
import FlightDetailsPanel from "./FlightDetailsPanel";
import MobileDetailsDrawer from "./MobileDetailsDrawer";
import type { NormalizedFlight } from "@/app/types/flight";

type Props = {
  flights?: unknown[];
  selectedFlight: NormalizedFlight | null;
  onSelectFlight: (flight: NormalizedFlight | null) => void;
};

export default function FlightResults({
  flights = [],
  selectedFlight,
  onSelectFlight,
}: Props) {
  if (!Array.isArray(flights) || flights.length === 0) {
    return <p className="text-gray-500 mt-6">No flights found.</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="space-y-4 lg:col-span-2">
        {flights.map((flight: any, index) => {
          const segment = flight.segments?.[0];
          const firstLeg = segment?.legs?.[0];
          const lastLeg = segment?.legs?.[segment.legs.length - 1];

          if (!firstLeg || !lastLeg) return null;

          const normalized: NormalizedFlight = {
            offerToken: flight.offerToken,

            airline: firstLeg.carriersData?.[0]
              ? {
                  name: firstLeg.carriersData[0].name,
                  logo: firstLeg.carriersData[0].logo,
                }
              : { name: "Unknown airline" },

            departureAirport: {
              code: firstLeg.departureAirport?.code ?? "—",
            },

            arrivalAirport: {
              code: lastLeg.arrivalAirport?.code ?? "—",
            },

            departureTime: new Date(firstLeg.departureTime).toLocaleTimeString(
              [],
              { hour: "2-digit", minute: "2-digit" }
            ),

            arrivalTime: new Date(lastLeg.arrivalTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),

            durationText: segment.totalTime
              ? `${Math.floor(segment.totalTime / 60)}h ${
                  segment.totalTime % 60
                }m`
              : segment.duration ?? "",

            stops: Math.max(segment.legs.length - 1, 0),

            /** 🔑 ALWAYS ARRAY */
            layovers:
              segment.legs.length > 1
                ? segment.legs
                    .slice(0, -1)
                    .map((l: any) => l.arrivalAirport.code)
                : [],

            cabinClass: flight.brandedFareInfo?.cabinClass ?? "Economy",

            price:
              flight.priceBreakdown?.total ??
              flight.travellerPrices?.[0]?.price ??
              null,

            badge: undefined,
          };

          return (
            <FlightCard
              key={normalized.offerToken ?? index}
              flight={normalized}
              isSelected={selectedFlight?.offerToken === normalized.offerToken}
              onSelect={() => onSelectFlight(normalized)}
            />
          );
        })}
      </div>

      <div className="hidden lg:block">
        {selectedFlight && <FlightDetailsPanel offer={selectedFlight} />}
      </div>

      {selectedFlight && (
        <MobileDetailsDrawer
          offer={selectedFlight}
          onClose={() => onSelectFlight(null)}
        />
      )}
    </div>
  );
}
