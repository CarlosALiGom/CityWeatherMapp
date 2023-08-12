import { weatherCities } from "@/utils/weatherCities";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const WeatherCityPage = (): React.ReactElement => {
  return (
    <>
      <h1 className="text-[21.25px] font-semibold text-dark-text">
        Weather City
      </h1>
      <h2 className="mt-2 mb-2 text-[17px] text-left text-dark-text font-semibold">
        City
      </h2>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a city" />
        </SelectTrigger>
        <SelectContent>
          {weatherCities.map((city) => (
            <SelectItem key={city.id} value={city.id.toString()}>
              {city.city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default WeatherCityPage;
