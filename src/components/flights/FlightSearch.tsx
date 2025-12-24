"use client";

import { useState } from "react";
import AirportAutocomplete from "../AirportAutocomplete";

type LocationOption = {
  code: string;
  label: string;
  type: "AIRPORT" | "CITY";
};

type SearchParams = {
  from: LocationOption;
  to: LocationOption;
  departDate: string;
  adults: number;
  cabinClass: "ECONOMY" | "BUSINESS" | "FIRST";
};

type Props = {
  onSearch?: (params: SearchParams) => void; 
};

export default function FlightSearch({ onSearch }: Props) {
  const [from, setFrom] = useState<LocationOption | null>(null);
  const [to, setTo] = useState<LocationOption | null>(null);
  const [departDate, setDepartDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [cabinClass, setCabinClass] =
    useState<SearchParams["cabinClass"]>("ECONOMY");

  function handleSubmit() {
    if (!from || !to || !departDate || !onSearch) return;

    onSearch({
      from,
      to,
      departDate,
      adults,
      cabinClass,
    });
  }

  return (
    <div className="w-full bg-white p-4 rounded-xl shadow border space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <AirportAutocomplete
          placeholder="From"
          value={from?.label ?? ""}
          onSelect={setFrom}
        />

        <AirportAutocomplete
          placeholder="To"
          value={to?.label ?? ""}
          onSelect={setTo}
        />

        <input
          type="date"
          className="border p-3 rounded border-gray-300 text-gray-600"
          value={departDate}
          onChange={(e) => setDepartDate(e.target.value)}
        />

        <select
          className="border p-3 rounded border-gray-300 text-gray-600"
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} adult{n > 1 ? "s" : ""}
            </option>
          ))}
        </select>

        <select
          className="border p-3 rounded border-gray-300 text-gray-600"
          value={cabinClass}
          onChange={(e) =>
            setCabinClass(e.target.value as SearchParams["cabinClass"])
          }
        >
          <option value="ECONOMY">Economy</option>
          <option value="BUSINESS">Business</option>
          <option value="FIRST">First</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
      >
        Search flights
      </button>
    </div>
  );
}
