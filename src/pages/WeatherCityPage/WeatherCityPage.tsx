import { weatherCities } from "@/utils/weatherCities";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { useEffect, useState } from "react";
import useCityWeather from "@/hooks/useCityWeather/useCityWeather";
import { cityWeatherResponseStructure } from "@/types";
import { initialWeatherCity } from "@/utils/initialWeatherCity";
import WeatherConditions from "@/components/WeatherConditions/WeatherConditios";

const WeatherCityPage = (): React.ReactElement => {
  const [selectedCity, setSelectedCity] = useState<string>("La Gabarra");
  const [selectedWeatherCity, setSelectedWeatherCity] =
    useState<cityWeatherResponseStructure>(initialWeatherCity);
  const { getCityWeather } = useCityWeather();

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    (async () => {
      if (selectedCity != "") {
        const foundCity = weatherCities.find(
          (city) => city.city === selectedCity
        );
        if (foundCity) {
          const cityWeather = await getCityWeather(
            foundCity.location.coordinates[1],
            foundCity.location.coordinates[0]
          );
          setSelectedWeatherCity(cityWeather);
        }
      }
    })();
  }, [getCityWeather, selectedCity]);

  return (
    <>
      <h1 className="text-[21.25px] font-semibold text-dark-text">
        Weather City
      </h1>
      <h2 className="mt-2 mb-2 text-[17px] text-left text-dark-text font-semibold">
        City
      </h2>
      <Select value={selectedCity} onValueChange={handleCityChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a city" />
        </SelectTrigger>
        <SelectContent>
          {weatherCities.map((city) => (
            <SelectItem key={city.id} value={city.city}>
              {city.city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedWeatherCity.id ? (
        <WeatherConditions cityWeather={selectedWeatherCity} />
      ) : (
        <div className="mt-4 w-[343px] h-[231px] rounded-lg border border-solid border-area-blue"></div>
      )}
    </>
  );
};

export default WeatherCityPage;
