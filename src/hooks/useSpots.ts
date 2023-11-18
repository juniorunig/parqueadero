import { useEffect, useState } from "react";
import { service } from "../service";
import { Spot } from "../models";


const sides: Spot[] = [
    {
      code: "A1",
      state: "true",
    },
    {
      code: "A2",
      state: "false",
    },
    {
      code: "A3",
      state: "false",
    },
    {
      code: "A5",
      state: "false",
    },
  ];


export const useSpots = () => {
  const [spots, setSpots] = useState<Spot[]>([]);

  const getSpost = () => {
    service().then((data) => {
      if (data) {
        setSpots(data);
        console.log(data);
        
      } else {
        setSpots(sides);
      }
    }).catch((error) => {   
        console.log(error);
        setSpots(sides);        
    });
  };

  useEffect(() => {
    const interval = setInterval(()=>{
      getSpost();
    }, 9000)
    return ()=>{
      clearInterval(interval)
    }
  }, []);

  return { spots };
};
