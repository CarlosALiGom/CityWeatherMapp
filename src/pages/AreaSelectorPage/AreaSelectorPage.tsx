import Location from "@/components/Location/Location";
import { useEffect, useState } from "react";

export interface UserLocation {
  latitude: number;
  longitude: number;
}
const AreaSelectorPage = (): React.ReactElement => {
  const [userLocation, setUserLocation] = useState<UserLocation>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({
            latitude: latitude,
            longitude: longitude,
          });
        },
        (error) => {
          console.error("Error obtaining location:", error);
        }
      );
    } else {
      console.error("Geolocation not available");
    }
  }, []);

  const handleLatitudeChange = (value: number) => {
    setUserLocation({ ...userLocation, latitude: value });
  };

  const handleLongitudeChange = (value: number) => {
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
