export interface WeatherCityStructure {
  id: number;
  city: string;
  timezone: string;
  location: {
    type: string;
    coordinates: number[];
  };
}
