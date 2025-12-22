"use client";

import { useEffect, useRef, useState } from "react";

/* ---------------- Types ---------------- */

type Airport = {
  label: string;
  code: string;
  airportCode: string;
  city: string;
  country: string;
  type: "AIRPORT" | "CITY";
};

type Props = {
  value: string;
  onSelect: (airport: Airport) => void;
  placeholder?: string;
};

/* ---------------- Cache ---------------- */

// Simple in-memory cache (lives for session)
const airportCache = new Map<string, Airport[]>();

/* ---------------- Component ---------------- */

export default function AirportAutocomplete({
  value,
  onSelect,
  placeholder = "Search airport",
}: Props) {
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<Airport[]>([]);
  const [loading, setLoading] = useState(false);

  // prevents refetch after selection
  const skipNextFetch = useRef(false);

  useEffect(() => {
    if (skipNextFetch.current) {
      skipNextFetch.current = false;
      return;
    }

    if (!query || query.length < 2) {
      setResults([]);
      return;
    }

    // 🧠 Cache hit
    if (airportCache.has(query)) {
      setResults(airportCache.get(query)!);
      return;
    }

    const controller = new AbortController();
    const debounce = setTimeout(async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `/api/flights/locations?q=${encodeURIComponent(query)}`,
          { signal: controller.signal }
        );

        if (!res.ok) return;

        const data = await res.json();
        const list = Array.isArray(data) ? data : [];

        airportCache.set(query, list);
        setResults(list);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 300); // ⏱ debounce

    return () => {
      clearTimeout(debounce);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="relative">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full border rounded-lg p-3 border-gray-300 text-gray-600"
      />

      {loading && (
        <div className="absolute bg-white p-2 text-sm">Searching…</div>
      )}

      {results.length > 0 && (
        <ul className="absolute z-10 bg-white border rounded-lg w-full max-h-60 overflow-auto">
          {results.map((r) => (
            <li
              key={r.code}
              onClick={() => {
                skipNextFetch.current = true;
                onSelect(r);
                setQuery(r.label);
                setResults([]);
              }}
              className="p-3 hover:bg-gray-100 cursor-pointer text-gray-600"
            >
              <div className="font-medium">{r.label}</div>
              <div className="text-xs text-gray-600">
                {r.city}, {r.country}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
