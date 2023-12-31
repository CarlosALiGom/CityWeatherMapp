import { LocationStructure } from "@/pages/AreaSelectorPage/AreaSelectorPage";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface LocationPropsStructure {
  location: LocationStructure;
  onLatitudeChange: (value: number) => void;
  onLongitudeChange: (value: number) => void;
}
const Location = ({
  location,
  onLatitudeChange,
  onLongitudeChange,
}: LocationPropsStructure): React.ReactElement => {
  const isValidLatitude = location.latitude >= -90 && location.latitude <= 90;

  const isValidLongitude =
    location.longitude >= -180 && location.longitude <= 180;

  return (
    <div className="mt-4">
      <h2 className="mb-2 text-left text-dark-text font-semibold">Location</h2>
      <div className="flex">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="latitude">Latitude</Label>
          <Input
            id="latitude"
            type="number"
            value={location.latitude}
            onChange={(event) =>
              onLatitudeChange(parseFloat(event.target.value))
            }
            className="rounded-l-lg"
          ></Input>
          {!isValidLatitude && (
            <p className="text-xs text-light-red mt-1">
              Latitude must be between -90 and 90.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="longitude">Longitude</Label>
          <Input
            id="longitude"
            type="number"
            value={location.longitude}
            onChange={(event) =>
              onLongitudeChange(parseFloat(event.target.value))
            }
            className="rounded-r-lg"
          ></Input>
          {!isValidLongitude && (
            <p className="text-xs text-light-red mt-1">
              Longitude must be between -180 and 180.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;
