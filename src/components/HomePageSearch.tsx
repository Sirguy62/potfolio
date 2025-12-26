"use client";

import { useState } from "react";
import HotelSearch from "./HotelSearch";
import FlightSearch from "./flights/FlightSearch";
import { useRouter } from "next/navigation";
import Search from "../app/attraction/Search";

type Tab = "hotel" | "flight" | "activities";

export default function SearchPage() {
  const [activeTab, setActiveTab] = useState<Tab>("hotel");

   const router = useRouter();

  return (
    <div className=" lg:h-[40vh] bg-gradient-to-b from-[#181616c3] to-transparent rounded-md">
      <div className="max-w-6xl mx-auto  p-6">
        <h1 className="text-3xl text-center lg:text-left font-bold mb-3 text-white">
          Search
        </h1>

        <div className="flex gap-6 w-sm  ">
          <TabButton
            label="🏨 Hotels"
            isActive={activeTab === "hotel"}
            onClick={() => setActiveTab("hotel")}
          />
          <TabButton
            label="✈️ Flights"
            isActive={activeTab === "flight"}
            onClick={() => setActiveTab("flight")}
          />
          <TabButton
            label="📍 Attractions"
            isActive={activeTab === "activities"}
            onClick={() => setActiveTab("activities")}
          />
        </div>

        {/* Content */}
        <div className="  border-t border-gray-200 pt-3 shadow-lg ">
          {activeTab === "hotel" && <HotelSearch />}
          {activeTab === "flight" && (
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
          )}
          {activeTab === "activities" && <Search />}
        </div>
      </div>
    </div>
  );
}

function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex py-1 my-3  font-semibold text-xl transition
        ${
          isActive
            ? "border-b-2 border-blue-600 text-blue-600"
            : " text-white hover:text-gray-200"
        }`}
    >
      {label}
    </button>
  );
}



