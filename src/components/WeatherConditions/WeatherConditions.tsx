import { cityWeatherResponseStructure } from "@/types";
import React from "react";
import { Progress } from "../ui/progress";

interface WeatherConditionsProps {
  cityWeather: cityWeatherResponseStructure;
}

const WeatherConditions = ({
  cityWeather,
}: WeatherConditionsProps): React.ReactElement => {
  const unixTimestampToHour = (time: number) => {
    const date = new Date(time * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <>
      <div className="mt-4 w-[343px] min-h-[231px] rounded-lg border border-solid border-area-blue p-4">
        <div className="flex gap-4">
          <div className="flex gap-2">
            <img
              className="w-8 h-8 border border-gray-200 rounded-full"
              src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`}
              alt="weather simbol"
            />
            <div>
              <p className="text-left uppercase text-light-text text-[10.88px]">
                Weather
              </p>
              <p className="text-left text-dark-text text-[17px]">
                {cityWeather.weather[0].main}
              </p>
            </div>
          </div>
          <div>
            <p className="text-left uppercase text-light-text text-[10.88px]">
              description
            </p>
            <p className="text-left text-dark-text text-[17px]">
              {`${cityWeather.weather[0].description}: ${cityWeather.clouds.all} %`}
            </p>
          </div>
        </div>
        <hr className="w-[311px] h-[1px] bg-mid-blue my-4"></hr>
        <div className="flex gap-8">
          <div>
            <p className="text-left uppercase text-light-text text-[10.88px]">
              sunset
            </p>
            <p className="text-left text-dark-text text-[17px]">
              {unixTimestampToHour(cityWeather.sys.sunset)}
            </p>
          </div>
          <div>
            <p className="text-left uppercase text-light-text text-[10.88px]">
              sunrise
            </p>
            <p className="text-left text-dark-text text-[17px]">
              {unixTimestampToHour(cityWeather.sys.sunrise)}
            </p>
          </div>
          <div>
            <p className="text-left uppercase text-light-text text-[10.88px]">
              location
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${cityWeather.coord.lat},${cityWeather.coord.lon}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex gap-1">
                <img
                  src="./img/location-point.svg"
                  alt="location point"
                  width={16}
                  height={16}
                />
                <p className="text-left text-dark-text text-[17px]">
                  {cityWeather.name}
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex mt-4 gap-8">
          <div>
            <p className="text-left uppercase text-light-text text-[10.88px]">
              temperature
            </p>
            <p className="text-left text-dark-text text-[17px]">
              {cityWeather.main.temp}
            </p>
          </div>
          <div>
            <p className="text-left uppercase text-light-text text-[10.88px]">
              feels like
            </p>
            <p className="text-left text-dark-text text-[17px]">
              {cityWeather.main.feels_like}
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-2 gap-2">
          <p className="uppercase text-light-text text-[10.88px] text-end text-placeholder">
            {`${cityWeather.main.humidity} % humidity`}
          </p>
          <Progress value={cityWeather.main.humidity} />
        </div>
      </div>
    </>
  );
};

export default WeatherConditions;
