"use client";

import FlightDetailsPanel from "./FlightDetailsPanel";

/* ---------------- Types ---------------- */

type MobileDetailsDrawerProps = {
  offer: {
    offerToken?: string;
    segments?: unknown[];
    priceBreakdown?: unknown;
    [key: string]: unknown;
  };
  onClose: () => void;
};

export default function MobileDetailsDrawer({
  offer,
  onClose,
}: MobileDetailsDrawerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl border-t p-4 lg:hidden z-50">
      <button onClick={onClose} className="text-blue-600 mb-2">
        Close
      </button>

      <FlightDetailsPanel offer={offer} />
    </div>
  );
}
