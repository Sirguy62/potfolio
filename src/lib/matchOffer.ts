
type ExpiredOfferSnapshot = {
  departureTime: string;
  arrivalTime: string;
  stops: number;
  airlineCode?: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function matchOffer(expired: ExpiredOfferSnapshot, offers: any[]) {
  if (!offers?.length) return null;

  return (
    offers.find((offer) => {
      const segment = offer.segments?.[0];
      const leg = segment?.legs?.[0];
      if (!leg) return false;

      const stops = Math.max(segment.legs.length - 1, 0);

      return (
        leg.departureTime === expired.departureTime &&
        leg.arrivalTime === expired.arrivalTime &&
        stops === expired.stops &&
        leg.carriersData?.[0]?.code === expired.airlineCode
      );
    }) ?? null
  );
}
