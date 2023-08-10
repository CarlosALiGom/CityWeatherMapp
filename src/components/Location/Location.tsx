import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { UserLocation } from "@/pages/AreaSelectorPage/AreaSelectorPage";

interface LocationPropsStructure {
  userLocation: UserLocation;
  onLatitudeChange: (value: string) => void;
  onLongitudeChange: (value: string) => void;
}
const Location = ({
  userLocation,
  onLatitudeChange,
  onLongitudeChange,
}: LocationPropsStructure): React.ReactElement => {
  return (
    <div className="mt-2">
      <h2 className="mb-2 text-left text-dark-text font-semibold">Location</h2>
      <div className="flex">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="latitude">Latitude</Label>
          <Input
            id="latitude"
            type="number"
            value={userLocation.latitude}
            onChange={(event) => onLatitudeChange(event.target.value)}
            className="rounded-l-lg"
          ></Input>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="longitude">Longitude</Label>
          <Input
            id="longitude"
            type="number"
            value={userLocation.longitude}
            onChange={(event) => onLongitudeChange(event.target.value)}
            className="rounded-r-lg"
          ></Input>
        </div>
      </div>
    </div>
  );
};

export default Location;
