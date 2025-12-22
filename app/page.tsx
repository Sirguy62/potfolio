import Link from "next/link";
import Nearby from "./components/Nearby";
import HomePageSearch from "./components/HomePageSearch";
import FlightOffers from "./components/FlightOffers";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <main>
        <section
          className="flex flex-col relative w-full min-h-screen md:min-h-[90vh] bg-cover bg-center px-2 items-center justify-center"
          style={{ backgroundImage: "url('/images/home.jpg')" }}
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
              Bookora
              <span className="block text-4xl md:text-5xl text-indigo-600 mt-2">
                Your Travel Starts Here.
              </span>
            </h1>

            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Search and book the best hotels, secure affordable flights, and
              discover unforgettable events all with one easy to use platform.
            </p>
          </div>
          <div className="">
            <HomePageSearch />
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 pt-10">
          <Nearby />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <FlightOffers />
        </div>
      </main>
    </div>
  );
}
