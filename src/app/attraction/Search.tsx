/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const [loadingAutocomplete, setLoadingAutocomplete] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);
  const [open, setOpen] = useState(false);

  const [startDate, setStartDate] = useState(params.get("startDate") || "");
  const [endDate, setEndDate] = useState(params.get("endDate") || "");

  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  
  const cacheRef = useRef<Record<string, Destination[]>>({});

 
  useEffect(() => {
    if (query.length < 2 || hasSelected) {
      setResults([]);
      setOpen(false);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    const controller = new AbortController();

    debounceRef.current = setTimeout(async () => {
      if (cacheRef.current[query]) {
        setResults(cacheRef.current[query]);
        setOpen(true);
        return;
      }

      try {
        setLoadingAutocomplete(true);

        const res = await fetch(`/api/destinations?q=${query}`, {
          signal: controller.signal,
        });

       const data: Destination[] = await res.json();

       const uniqueResults: Destination[] = Array.from(
         new Map(data.map((d) => [d.destId, d])).values()
       );

        cacheRef.current[query] = uniqueResults;

        setResults(uniqueResults);
        setOpen(true);
     
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      } finally {
        setLoadingAutocomplete(false);
      }
    }, 300);

    return () => {
      controller.abort();
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query, hasSelected]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(d: Destination) {
    setQuery(d.label);
    setDestId(d.destId);
    setResults([]);
    setHasSelected(true);
    setOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!destId || !startDate || !endDate) return;

    setSubmitting(true);

    const searchParams = new URLSearchParams({
      destId,
      startDate,
      endDate,
    });

    router.push(`/attraction?${searchParams.toString()}`);
  }

  useEffect(() => {
    setSubmitting(false);
  }, [params]);


  function AutocompleteSkeleton() {
    return (
      <div className="absolute z-10 w-full bg-white border rounded mt-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="p-3 border-b animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        ))}
      </div>
    );
  }
  

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full flex-col md:flex-row gap-4 p-6 bg-white border rounded-lg"
    >
      <div ref={wrapperRef} className="relative w-full">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setHasSelected(false);
          }}
          placeholder="Search city..."
          className="border p-2 rounded w-full text-gray-300 "
          onFocus={() => results.length && setOpen(true)}
        />

        {loadingAutocomplete && <AutocompleteSkeleton />}

        {open && results.length > 0 && !loadingAutocomplete && (
          <ul className="absolute z-10 w-full bg-white rounded mt-1 max-h-60 overflow-auto shadow">
            {results.map((d) => (
              <li
                key={d.destId}
                onClick={() => handleSelect(d)}
                className="p-2 hover:bg-gray-100 cursor-pointer text-gray-600"
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
        className="border p-2 rounded w-full text-gray-300"
      />

      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border p-2 rounded w-full text-gray-300"
      />

      <button
        type="submit"
        disabled={!destId || !startDate || !endDate || submitting}
        className="bg-indigo-600 text-white px-6 py-2 rounded disabled:opacity-50"
      >
        {submitting ? "Searching..." : "Search"}
      </button>
    </form>
  );
}
