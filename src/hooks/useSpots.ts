import { useEffect, useState, useRef } from "react";
import { Spot } from "../models";
import { getSpots } from "../service";

const sides: Spot[] = [
  {
    code: "A1",
    state: true,
  },
  {
    code: "A2",
    state: false,
  },
  {
    code: "A3",
    state: false,
  },
  {
    code: "A5",
    state: false,
  },
];

export const useSpots = () => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const isMounted = useRef(false);
  const isLoading = useRef(false);

  const fetchSpots = async () => {
    if (isLoading.current) return;
    isLoading.current = true;
    try {
      const data = await getSpots();

      if (isMounted.current) {
        setSpots(data);
        setError(null);
      }
    } catch (error) {
      if (isMounted.current) {
        setSpots(sides);
        setError(error as Error);
      }
    } finally {
      isLoading.current = false;
    }
  };

  useEffect(() => {
    isMounted.current = true;
    fetchSpots();

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchSpots, 2000);
    console.log({ spots });

    return () => {
      clearInterval(interval);
      isMounted.current = false;
    };
  }, []);

  return { spots, error };
};
