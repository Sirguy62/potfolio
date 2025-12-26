
// import HotelSearch from "@/src/components/HotelSearch";
// import Nearby from "@/src/components/Nearby";
import HotelSearch from "@/components/HotelSearch";
import Nearby from "@/components/Nearby";
import { FaArrowRightLong } from "react-icons/fa6";

export default async function Hotel() {

  return (
    <main className="">
      <section
        className="flex flex-col relative w-full md:min-h-[90vh] bg-cover bg-center px-2 items-center justify-center"
        style={{ backgroundImage: "url('/images/good.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-3xl md:text-5xl text-center font-bold text-white-900 mb-6">
            Welcome to Bookora booking platform!
          </p>
          <p className="text-xl text-gray-200 mb-2 max-w-3xl mx-auto text-center">
            Search and book the best hotels, secure affordable flights, and
            discover <br /> unforgettable events all with one easy to use
            platform.
          </p>
          <button className="flex justify-center items-center gap-3 mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            EXPLORE NOW <FaArrowRightLong />
          </button>
          <div className="w-full lg:w-2xl mt-12 ">
            <HotelSearch />
          </div>
        </div>
      </section>
      <div className="py-5">
        <Nearby />
      </div>
    </main>
  );
}
