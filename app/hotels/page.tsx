import Footer from "../components/Footer";
import Nearby from "../components/Nearby";
import HotelSearch from "./search-hotels/page";
import { FaArrowRightLong } from "react-icons/fa6";

export default async function Hotel() {
  const image = "/images/logo.png";

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <section
        className="flex flex-col relative w-full min-h-[90vh] bg-cover bg-center items-center justify-center"
        style={{ backgroundImage: "url('/images/good.jpg')" }}
      >
        <div>
          <img
            src={image}
            alt="logo"
            width={90}
            height={90}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-3xl md:text-5xl font-bold text-white-900 mb-6">
            Welcome to Bookora booking platform!
          </p>
          <p className="text-xl text-gray-200 mb-2 max-w-3xl mx-auto text-center">
            Discover and book the best hotels worldwide <br /> with ease and
            confidence.
          </p>
          <button className="flex justify-center items-center gap-3 mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            EXPLORE NOW <FaArrowRightLong />
          </button>
          <div className="w-full">
            <HotelSearch />
          </div>
        </div>
      </section>
      <div className="py-5">
        <Nearby />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
