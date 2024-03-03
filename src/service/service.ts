const apiUrl = import.meta.env.VITE_API_URL as string;

export type Sensor = {
  sensor1: boolean;
  sensor2: boolean;
  sensor3: boolean;
};

export const getSensores = async (): Promise<Sensor> => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

type Tsensores = keyof Sensor;

export const getSpots = async () => {
  const sensores = await getSensores();

  const spots = Object.keys(sensores).map((key: string) => {
    const sensor = sensores[key as Tsensores];
    return {
      code: key,
      state: sensor,
    };
  });

  return spots;
};
