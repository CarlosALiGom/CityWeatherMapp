import Location from "@/components/Location/Location";
import { useState } from "react";

export interface UserLocation {
  latitude: string;
  longitude: string;
}
const AreaSelectorPage = (): React.ReactElement => {
  const [userLocation, setUserLocation] = useState<UserLocation>({
    latitude: "",
    longitude: "",
  });

  const handleLatitudeChange = (value: string) => {
    setUserLocation({ ...userLocation, latitude: value });
  };

  const handleLongitudeChange = (value: string) => {
    setUserLocation({ ...userLocation, longitude: value });
  };

  return (
    <>
      <h1 className="text-xl font-semibold text-dark-text">Area selector</h1>
      <Location
        userLocation={userLocation}
        onLatitudeChange={handleLatitudeChange}
        onLongitudeChange={handleLongitudeChange}
      />
    </>
  );
};

export default AreaSelectorPage;
