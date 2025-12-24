// app/flights/page.tsx
"use client";

import FlightSearch from "@/src/components/flights/FlightSearch";
import { useRouter } from "next/navigation";

export default function FlightsHomePage() {
  const router = useRouter();

  return (
    <div
      className="flex flex-col relative w-full min-h-screen md:min-h-[90vh] bg-cover bg-center px-2 items-center justify-center"
      style={{ backgroundImage: "url('/images/airplane.jpg')" }}
    >
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
    </div>
  );
}
