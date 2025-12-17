"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Destination = {
  label: string;
  destId: string;
};

export default function Search() {
  const router = useRouter();
  const params = useSearchParams();

  const [query, setQuery] = useState("");
  const [destId, setDestId] = useState<string | null>(params.get("destId"));
  const [results, setResults] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(false);

  const [startDate, setStartDate] = useState(params.get("startDate") || "");
  const [endDate, setEndDate] = useState(params.get("endDate") || "");


  function Search({ query }: { query: string }) {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
      const controller = new AbortController(); // Create controller inside effect
      const signal = controller.signal;

      async function fetchDestinations() {
        try {
          const res = await fetch(`/api/destinations?query=${query}`, {
            signal,
          });
          const data = await res.json();
          setDestinations(data.result || []);
        } catch (err: any) {
          if (err.name === "AbortError") {
            // fetch was aborted, no need to log
            return;
          }
          console.error("Fetch error:", err);
        }
      }

      fetchDestinations();

      return () => {
        controller.abort(); // safely abort fetch on cleanup
      };
    }, [query]);

    // rest of your component...
  }


  function handleSelect(d: Destination) {
    setQuery(d.label);
    setDestId(d.destId);
    setResults([]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!destId || !startDate || !endDate) return;

    const params = new URLSearchParams({
      destId,
      startDate,
      endDate,
    });

    router.push(`/attraction?${params.toString()}`);
  }

  function AutocompleteSkeleton() {
    return (
      <div className="absolute z-10 w-full bg-white border rounded mt-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="p-3 border-b last:border-b-0 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        ))}
      </div>
    );
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col md:flex-row gap-4 p-6 bg-white border rounded-lg"
    >
      <div className="relative w-full">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city..."
          className="border p-2 rounded w-full text-gray-600"
        />

        {loading && <AutocompleteSkeleton />}

        {results.length > 0 && !loading && (
          <ul className="absolute z-10 w-full bg-white border rounded mt-1 max-h-60 overflow-auto">
            {results.map((d) => (
              <li
                key={d.destId}
                onClick={() => handleSelect(d)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {d.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border p-2 rounded w-full text-gray-600"
      />

      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border p-2 rounded w-full text-gray-600"
      />

      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded"
      >
        Search
      </button>
    </form>
  );
}
