import CarSpotImg from "../../assets/carSpot";

type Props = {
  available: boolean;
  code?: string;
};

const ParkingSpot = ({ available, code='' }: Props) => {
  const isAvailable = available ? "border-red-500" : "border-green-500";
  const isOcupated = available ? "no disponible" : "disponible";

  return (
    <div
      className={`min-w-[200px] min-h-[200px] flex flex-col justify-center items-center p-3
    ${isAvailable}
     border border-dashed`}
    >
     <h2 className="text-white text-sm font-bold uppercase">{code}</h2>
     <CarSpotImg color={available ?  '#ef4444': '#22c55e'} />
     <h2 className={`text-white capitalize py-1 px-2 border rounded ${available ? 'bg-red-500 border-red-500': 'bg-green-500 border-green-500'}`}>{isOcupated}</h2>
    </div>
  );
};
export default ParkingSpot;
