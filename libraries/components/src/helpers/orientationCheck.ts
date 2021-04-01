import { Dimensions } from "react-native";

const isLandscapeMode = (): boolean => {
  const { height, width } = Dimensions.get("window");

  return width >= height;
};

export { isLandscapeMode };
