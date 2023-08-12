import Area from "@/components/Area/Area";
import Location from "@/components/Location/Location";
import { useEffect, useState } from "react";

export interface LocationStructure {
  latitude: number;
  longitude: number;
}

export interface UserLocationStructure {
  userLatitude: number;
  userLongitude: number;
}

const AreaSelectorPage = (): React.ReactElement => {
  const [userLocation, setUserLocation] = useState<UserLocationStructure>({
    userLatitude: 0,
    userLongitude: 0,
  });

  const [location, setLocation] = useState<LocationStructure>({
    latitude: userLocation.userLatitude,
    longitude: userLocation.userLongitude,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({
            userLatitude: latitude,
            userLongitude: longitude,
          });
          setLocation({
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
    setLocation({ ...location, latitude: value });
  };

  const handleLongitudeChange = (value: number) => {
    setLocation({ ...location, longitude: value });
  };

  return (
    <>
      <h1 className="text-[21.25px] font-semibold text-dark-text">
        Area selector
      </h1>
      <Location
        location={location}
        onLatitudeChange={handleLatitudeChange}
        onLongitudeChange={handleLongitudeChange}
      />
      <Area location={location} userLocation={userLocation} />
    </>
  );
};

export default AreaSelectorPage;
