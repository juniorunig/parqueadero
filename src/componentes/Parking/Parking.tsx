import { ParkingSpot } from "..";
import { useSpots } from "../../hooks";

const Parking = () => {
  const { spots } = useSpots();

  return (
    <section className="w-full min-h-full grid gap-4 grid-cols-2 p-4 max-w-[1020px]">
      {spots.map((item) => (
        <ParkingSpot
          key={item.code}
          available={item.state === "true" ? true : false}
          code={item.code}
        />
      ))}
    </section>
  );
};
export default Parking;
