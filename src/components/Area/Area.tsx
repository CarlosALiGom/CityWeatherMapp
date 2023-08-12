import {
  Circle,
  MapContainer,
  Marker,
  TileLayer,
  ScaleControl,
  useMap,
} from "react-leaflet";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import {
  LocationStructure,
  UserLocationStructure,
} from "@/pages/AreaSelectorPage/AreaSelectorPage";
import { getZoomLevel } from "@/utils/getZoomLevel";

interface AreaPropsStructure {
  location: LocationStructure;
  userLocation: UserLocationStructure;
}
interface ZoomStructure {
  zoom: number;
}

const Area = ({
  location,
  userLocation,
}: AreaPropsStructure): React.ReactElement => {
  const position = { lat: location.latitude, lng: location.longitude };
  const [zoom, setZoom] = useState<number>(500);

  const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZoom(parseFloat(event.target.value));
  };

  const MapCenter = (location: LocationStructure) => {
    const map = useMap();
    useEffect(() => {
      map.setView([location.latitude, location.longitude]);
    }, [location.latitude, location.longitude, map]);
    return null;
  };

  const ReajustViewPort = ({ zoom }: ZoomStructure) => {
    const map = useMap();
    useEffect(() => {
      map.setZoom(getZoomLevel(zoom));
    }, [zoom, map]);
    return null;
  };

  return (
    <>
      <div className="flex justify-between w-[343px] items-center">
        <h2 className="mt-4 mb-4 text-left text-dark-text font-semibold">
          Area
        </h2>
        <p className="text-[10.88px] pt-1 pr-2 text-light-text">max 20 km</p>
      </div>
      <Input
        type="range"
        id="zoomSlider"
        min={500}
        max={10000}
        step={1}
        value={zoom}
        onChange={handleZoomChange}
        className="w-[343px] h-[16px] mb-4"
      ></Input>
      {location.latitude && location.longitude ? (
        <MapContainer
          id="map"
          center={position}
          zoom={13}
          zoomControl={false}
          scrollWheelZoom={true}
          style={{ width: 343, height: 180 }}
        >
          <MapCenter
            latitude={location.latitude}
            longitude={location.longitude}
          />
          <ReajustViewPort zoom={zoom} />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <ScaleControl imperial={false} />
          <Circle
            center={{
              lng: location.longitude,
              lat: location.latitude,
            }}
            color="#42C3EE"
            opacity={0.7}
            fillOpacity={0.4}
            radius={zoom}
          />
          <Marker
            position={{
              lng: userLocation.userLongitude,
              lat: userLocation.userLatitude,
            }}
          ></Marker>
        </MapContainer>
      ) : (
        <div className="w-[343px] h-[180px] bg-mid-blue"></div>
      )}
    </>
  );
};

export default Area;
