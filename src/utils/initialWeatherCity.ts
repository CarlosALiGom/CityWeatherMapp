import { cityWeatherResponseStructure } from "@/types";

export const initialWeatherCity: cityWeatherResponseStructure = {
  coord: {
    lon: -2.0825,
    lat: 41.3552,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01n",
    },
  ],
  base: "stations",
  main: {
    temp: 22.25,
    feels_like: 22.02,
    humidity: 57,
  },
  clouds: {
    all: 10,
  },
  dt: 1691886018,
  sys: {
    country: "ES",
    sunrise: 1691903701,
    sunset: 1691953903,
  },
  timezone: 7200,
  id: 6362902,
  name: "Pozuel de Ariza",
  cod: 200,
};
