import Search from "./Search";
import Attractions from "./Attractions";
import { Suspense } from "react";

type PageProps = {
  searchParams: Promise<{
    destId?: string;
    startDate?: string;
    endDate?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;

  const destId = params.destId ?? "20088325";
  const startDate = params.startDate ?? "2026-01-31";
  const endDate = params.endDate ?? "2026-02-01";

  return (
    <div className="">
      <section
        className="relative flex w-full min-h-[60vh] items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/images/attraction.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full max-w-4xl">
          <Search />
        </div>
      </section>

      <Suspense fallback={null}>
        <Attractions destId={destId} startDate={startDate} endDate={endDate} />
      </Suspense>
    </div>
  );
}
