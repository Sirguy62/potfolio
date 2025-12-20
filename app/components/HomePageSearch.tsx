"use client";

import { useState } from "react";
import HotelSearch from "./HotelSearch";
import Search from "../attraction/Search";

type Tab = "hotel" | "flight" | "activities";

export default function SearchPage() {
  const [activeTab, setActiveTab] = useState<Tab>("hotel");

  return (
    <div className=" bg-gray-50 lg:h-[40vh]">
      <div className="max-w-6xl mx-auto  p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-600">Search</h1>

        {/* Tabs */}
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
          {activeTab === "flight" && <FlightUI />}
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
      className={`flex py-1 my-3  font-medium transition
        ${
          isActive
            ? "border-b-2 border-blue-600 text-blue-600"
            : " text-gray-600 hover:bg-gray-200"
        }`}
    >
      {label}
    </button>
  );
}

function FlightUI() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Flight Search</h2>
      <div className="grid md:grid-cols-4 gap-4">
        <input className="border p-3 rounded" placeholder="From (IATA)" />
        <input className="border p-3 rounded" placeholder="To (IATA)" />
        <input type="date" className="border p-3 rounded" />
        <input type="number" className="border p-3 rounded" placeholder="Passengers" />
      </div>
      <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
        Search Flights
      </button>
    </div>
  );
}


