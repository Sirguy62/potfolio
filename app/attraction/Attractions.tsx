import { getAttractions } from "@/lib/attractions/getAttractions";

type Props = {
  destId: string;
  startDate: string;
  endDate: string;
};

export default async function Attractions({
  destId,
  startDate,
  endDate,
}: Props) {
  const attractions = await getAttractions({
    destId,
    startDate,
    endDate,
  });

console.log("attractions", attractions)


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {attractions.slice(0, 9).map((a) => (
        <div key={a.id} className="shadow-md rounded-lg p-4">
          {a.image && (
            <img
              src={a.image}
              alt={a.name}
              className="w-full h-40 object-cover rounded"
            />
          )}

          <h3 className="font-semibold mt-2 text-gray-600">{a.name}</h3>

          <p className="text-sm text-gray-600 line-clamp-3">{a.description}</p>
          <p className="text-sm text-gray-600 line-clamp-3">Rating:{a.rating}</p>
          <p className="text-sm text-gray-600 line-clamp-3">Price:{a.currency}{a.price}</p>
        </div>
      ))}
    </div>
  );
}
