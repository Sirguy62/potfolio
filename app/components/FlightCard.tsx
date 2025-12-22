// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export type FlightBadge = "CHEAPEST" | "FASTEST" | "BEST";

// type FlightCardProps = {
//   flight: {
//     airline: {
//       name: string;
//       logo?: string;
//     };
//     onSelect: () => void;
//     isSelected?: boolean;
//     departureAirport: { code: string };
//     arrivalAirport: { code: string };
//     departureTime: string;
//     arrivalTime: string;
//     durationText: string;
//     stops: number;
//     layovers?: string[];
//     cabinClass: string;
//     offerToken: string; // ✅ correct
//     price: {
//       units: number;
//       currencyCode: string;
//     } | null;
//     badge?: FlightBadge;
//   };
// };

// const BADGE_LABELS: Record<FlightBadge, string> = {
//   CHEAPEST: "Cheapest",
//   FASTEST: "Fastest",
//   BEST: "Best",
// };

// const BADGE_STYLES: Record<FlightBadge, string> = {
//   CHEAPEST: "bg-green-100 text-green-700",
//   FASTEST: "bg-blue-100 text-blue-700",
//   BEST: "bg-purple-100 text-purple-700",
// };

// export default function FlightCard({ flight, onSelect, isSelected }: FlightCardProps) {
//   const [open, setOpen] = useState(false);
//   const router = useRouter();
//   const price = flight.price;

//   const handleSelect = async () => {
//     sessionStorage.setItem("selectedOfferToken", flight.offerToken);
//     router.push(`/flights/${flight.offerToken}`);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-sm border p-4 flex flex-col gap-4">
//       {/* ───────── Top Row ───────── */}
//       <div className="flex items-center justify-between gap-3">
//         <div className="flex items-center gap-3">
//           <div className="h-6 w-6 flex items-center justify-center">
//             {flight.airline.logo && (
//               <img
//                 src={flight.airline.logo}
//                 alt={flight.airline.name}
//                 className="h-6 w-6 object-contain"
//               />
//             )}
//           </div>

//           <span className="text-sm text-gray-700 font-medium">
//             {flight.airline.name}
//           </span>

//           {flight.badge && (
//             <span
//               className={`text-xs font-semibold px-2 py-1 rounded ${
//                 BADGE_STYLES[flight.badge]
//               }`}
//             >
//               {BADGE_LABELS[flight.badge]}
//             </span>
//           )}
//         </div>

//         <span className="text-lg font-bold text-gray-900">
//           {price ? `${price.units} ${price.currencyCode}` : "Price unavailable"}
//         </span>
//       </div>

//       {/* ───────── Route ───────── */}
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-xl font-semibold">{flight.departureTime}</p>
//           <p className="text-sm text-gray-500">
//             {flight.departureAirport.code}
//           </p>
//         </div>

//         <div className="flex flex-col items-center text-sm text-gray-500">
//           <span>{flight.durationText}</span>
//           <span className="border-t w-16 my-1" />
//           <span>
//             {flight.stops === 0
//               ? "Non-stop"
//               : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
//             {flight.layovers?.length ? ` · ${flight.layovers.join(", ")}` : ""}
//           </span>
//         </div>

//         <div className="text-right">
//           <p className="text-xl font-semibold">{flight.arrivalTime}</p>
//           <p className="text-sm text-gray-500">{flight.arrivalAirport.code}</p>
//         </div>
//       </div>

//       {/* ───────── Cabin ───────── */}
//       <span className="text-xs text-gray-400">Cabin: {flight.cabinClass}</span>

//       {/* ───────── Details Toggle ───────── */}
//       <button
//         onClick={() => setOpen((v) => !v)}
//         className="text-blue-600 text-sm font-medium w-fit"
//       >
//         {open ? "Hide details" : "View details"}
//       </button>

//       {/* ───────── Details Drawer ───────── */}
//       {open && (
//         <div className="border-t pt-3 text-sm text-gray-600 space-y-1">
//           <div>Cabin: {flight.cabinClass}</div>
//           <div>Duration: {flight.durationText}</div>
//           <div>Stops: {flight.stops === 0 ? "Non-stop" : flight.stops}</div>
//           {flight.layovers?.length && (
//             <div>Layovers: {flight.layovers.join(", ")}</div>
//           )}
//         </div>
//       )}

//       {/* ───────── CTA ───────── */}
//       <div
//         className={`border rounded-xl p-4 cursor-pointer ${
//           isSelected ? "ring-2 ring-blue-600" : ""
//         }`}
//         onClick={onSelect}
//       >
//         {/* keep your UI exactly the same */}
//         <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
//           Select flight
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";

export type FlightBadge = "CHEAPEST" | "FASTEST" | "BEST";

import type { NormalizedFlight } from "@/app/types/flight";

type FlightCardProps = {
  flight: NormalizedFlight;
  onSelect?: () => void;
  isSelected?: boolean;
};



const BADGE_LABELS: Record<FlightBadge, string> = {
  CHEAPEST: "Cheapest",
  FASTEST: "Fastest",
  BEST: "Best",
};

const BADGE_STYLES: Record<FlightBadge, string> = {
  CHEAPEST: "bg-green-100 text-green-700",
  FASTEST: "bg-blue-100 text-blue-700",
  BEST: "bg-purple-100 text-purple-700",
};

export default function FlightCard({
  flight,
  onSelect,
  isSelected,
}: FlightCardProps) {
  const [open, setOpen] = useState(false);
  const price = flight.price;

  return (
    <div
      onClick={onSelect}
      className={`bg-white rounded-xl shadow-sm border p-4 flex flex-col gap-4 cursor-pointer transition ${
        isSelected ? "ring-2 ring-blue-600" : "hover:border-gray-300"
      }`}
    >
      {/* ───────── Top Row ───────── */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 flex items-center justify-center">
            {flight.airline?.logo && (
              <img
                src={flight.airline.logo}
                alt={flight.airline.name ?? "Airline"}
                className="h-6 w-6 object-contain"
              />
            )}
          </div>

          <span className="text-sm font-medium text-gray-700">
            {flight.airline?.name ?? "Unknown airline"}
          </span>

          {flight.badge && (
            <span
              className={`text-xs font-semibold px-2 py-1 rounded ${
                BADGE_STYLES[flight.badge]
              }`}
            >
              {BADGE_LABELS[flight.badge]}
            </span>
          )}
        </div>

        <span className="text-lg font-bold text-gray-900">
          {price ? `${price.units} ${price.currencyCode}` : "Price unavailable"}
        </span>
      </div>

      {/* ───────── Route ───────── */}
      <div className="flex items-center justify-between">
        {/* Departure */}
        <div>
          <p className="text-xl font-semibold">{flight.departureTime}</p>
          <p className="text-sm text-gray-500">
            {flight.departureAirport.code}
          </p>
        </div>

        {/* Middle */}
        <div className="flex flex-col items-center text-sm text-gray-500">
          <span>{flight.durationText}</span>
          <span className="border-t w-16 my-1" />
          <span>
            {flight.stops === 0
              ? "Non-stop"
              : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
            {flight.layovers?.length ? ` · ${flight.layovers.join(", ")}` : ""}
          </span>
        </div>

        {/* Arrival */}
        <div className="text-right">
          <p className="text-xl font-semibold">{flight.arrivalTime}</p>
          <p className="text-sm text-gray-500">{flight.arrivalAirport.code}</p>
        </div>
      </div>

      {/* ───────── Cabin ───────── */}
      <span className="text-xs text-gray-400">Cabin: {flight.cabinClass}</span>

      {/* ───────── Details Toggle ───────── */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="text-blue-600 text-sm font-medium w-fit"
      >
        {open ? "Hide details" : "View details"}
      </button>

      {/* ───────── Expandable Details ───────── */}
      {open && (
        <div className="border-t pt-3 text-sm text-gray-600 space-y-1">
          <div>Cabin: {flight.cabinClass}</div>
          <div>Duration: {flight.durationText}</div>
          <div>Stops: {flight.stops === 0 ? "Non-stop" : flight.stops}</div>
          {flight.layovers?.length && (
            <div>Layovers: {flight.layovers.join(", ")}</div>
          )}
        </div>
      )}

      {/* ───────── CTA ───────── */}
      <button
        type="button"
        className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2"
      >
        Select flight
      </button>
    </div>
  );
}

