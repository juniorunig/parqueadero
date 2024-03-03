const apiUrl = import.meta.env.VITE_API_URL as string;

type Sensor = {
    code: string ,
    state: boolean
}

export type Sensores = {
  sensor1:  Sensor;
  sensor2: Sensor;
  sensor3: Sensor;
};

export const getSensores = async (): Promise<Sensores> => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

type Tsensores = keyof Sensores;

export const getSpots = async () => {
  const sensores = await getSensores();

  const spots = Object.keys(sensores).map((key: string) => {
    const sensor = sensores[key as Tsensores];
    return {
      code: sensor.code,
      state: sensor.state,
    };
  });

  return spots;
};

