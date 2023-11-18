import { Spot } from "../models";

const apiUrl = import.meta.env.VITE_API_URL as string;
 

const mapToSensor = (data: Spot): Spot => {
    return {
        code: data.code,
        state: data.state,
    };
};

const service = async (): Promise<Spot[]> => {
    
    const response = await fetch(apiUrl);
    const data = await response.json();

    const spots: Spot[] = Object.keys(data).map((key: string) => {
        const sensorData = data[key];
        const sensor: Spot = mapToSensor(sensorData);

        const spot: Spot = {
            // Assuming Spot interface has a 'sensor' property
            ...sensor,
            // Include other Spot properties here if needed
        };
        return spot;
    });

    return spots;
};

export default service;
 