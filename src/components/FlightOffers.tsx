"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Loader from "./Loader";
import FlightCard, { FlightBadge } from "./FlightCard";

type Price = {
  units: number;
  nanos?: number;
  currencyCode: string;
};

type Carrier = {
  name: string;
  logo?: string;
};

type Airport = {
  code: string;
};

type Leg = {
  departureTime: string;
  arrivalTime: string;
  departureAirport: Airport;
  arrivalAirport: Airport;
  carriersData?: Carrier[];
};

type Segment = {
  legs: Leg[];
  totalTime?: number;
  duration?: string;
};

type FlightOffer = {
  offerToken: string;
  segments: Segment[];
  brandedFareInfo?: {
    cabinClass?: string;
  };
  priceBreakdown?: {
    total?: Price;
  };
  travellerPrices?: {
    price?: Price;
  }[];
};

type FlightDeal = {
  offerToken: string;
  key: FlightBadge;
  price?: Price;
};


function formatTime(date: string) {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDuration(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 2558,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "20px",
      },
    },
  ],
};


export default function FlightOffers() {
  const [flights, setFlights] = useState<FlightOffer[]>([]);
  const [priceMap, setPriceMap] = useState<Record<string, Price>>({});
  const [badges, setBadges] = useState<Record<string, FlightBadge>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFlights() {
      setLoading(true);

      const res = await fetch(
        `/api/flights/search?from=ONT.AIRPORT&to=NYC.CITY&depart_date=2026-03-15`
      );
      const data = await res.json();

    
      const badgeMap: Record<string, FlightBadge> = {};
      const priceLookup: Record<string, Price> = {};

      (data.flightDeals as FlightDeal[] | undefined)?.forEach((deal) => {
        if (deal.offerToken) {
          badgeMap[deal.offerToken] = deal.key;
          if (deal.price) priceLookup[deal.offerToken] = deal.price;
        }
      });

      setBadges(badgeMap);
      setPriceMap(priceLookup);

      const MAX_FLIGHTS = 8;
      const offers: FlightOffer[] = Array.isArray(data.flightOffers)
        ? data.flightOffers.slice(0, MAX_FLIGHTS)
        : [];

      setFlights(offers);
      setLoading(false);
    }

    fetchFlights();
  }, []);

  if (loading)
    return (
      <div className="p-6 flex justify-center">
        <Loader />
      </div>
    );

  if (!flights.length)
    return <p className="p-6 text-center">No flights found</p>;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold text-center text-gray-700">
        Flight Offers
      </h2>

      <Slider {...settings}>
        {flights.map((offer) => {
          const segment = offer.segments?.[0];
          const firstLeg = segment?.legs?.[0];
          const lastLeg = segment?.legs?.[segment.legs.length - 1];

          if (!segment || !firstLeg || !lastLeg) return null;

          const flightForCard = {
            offerToken: offer.offerToken, 

            airline: firstLeg.carriersData?.[0] ?? {
              name: "Unknown airline",
            },

            departureAirport: { code: firstLeg.departureAirport.code },
            arrivalAirport: { code: lastLeg.arrivalAirport.code },

            departureTime: formatTime(firstLeg.departureTime),
            arrivalTime: formatTime(lastLeg.arrivalTime),

            durationText: segment.totalTime
              ? formatDuration(segment.totalTime)
              : segment.duration ?? "",

            stops: Math.max(segment.legs.length - 1, 0),

            layovers:
              segment.legs.length > 1
                ? segment.legs.slice(0, -1).map((l) => l.arrivalAirport.code)
                : [],

            cabinClass: offer.brandedFareInfo?.cabinClass ?? "Economy",

            price:
              offer.priceBreakdown?.total ??
              offer.travellerPrices?.[0]?.price ??
              priceMap[offer.offerToken] ??
              null,

            badge: badges[offer.offerToken],
          };

          return (
            <div key={offer.offerToken} className="px-2">
              <FlightCard flight={flightForCard} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
