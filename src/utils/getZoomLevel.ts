export const getZoomLevel = (zoom: number): number => {
  if (zoom < 1300) {
    return 13;
  } else if (zoom < 2600) {
    return 12;
  } else if (zoom < 5600) {
    return 11;
  } else if (zoom < 9300) {
    return 10;
  } else {
    return 9;
  }
};
