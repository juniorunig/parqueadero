import { ParkingSpot } from "..";
import { useSpots } from "../../hooks";

const Parking = () => {
  const { spots } = useSpots();
  console.log({spots});
  

  return (
    <section
      className="w-full min-h-screen max-w-[1020px] flex flex-col gap-6"
      id="vehiculos"
    >
      <h1 className=" text-lg mt-4 lg:text-4xl text-center font-bold  uppercase w-full  text-gradient bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text">
        Estacionamiento
      </h1>
      <div className=" grid gap-4 grid-cols-1 lg:grid-cols-2 ">
        {spots.map((item) => (
          <ParkingSpot
            key={item?.code}
            available={(item?.state === 'true') ? true : false }
            code={item?.code}
          />
        ))}
      </div>
    </section>
  );
};
export default Parking;
