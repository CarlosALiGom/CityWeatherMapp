import { cityWeatherResponseStructure } from "@/types";
import { useCallback } from "react";

const useCityWeather = () => {
  const getCityWeather = useCallback(
    async (lat: number, lon: number): Promise<cityWeatherResponseStructure> => {
      const cityWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=249efd60e5021ba25f979f2caac2b853&units=metric`
      ).then((res) => res.json());

      return cityWeather;
    },
    []
  );

  return { getCityWeather };
};

export default useCityWeather;
