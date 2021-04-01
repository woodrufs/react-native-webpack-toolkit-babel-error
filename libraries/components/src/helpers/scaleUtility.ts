import { Dimensions } from "react-native";

let { width, height } = Dimensions.get("window");

// Swap width with height for landscape mode.
if (width > height) {
  [width, height] = [height, width];
}

// Guideline sizes are based on Zebra TC8000 screen.
const guidelineBaseWidth = 480;
const guidelineBaseHeight = 800;

export const scale = (size: number): number => {
  const scaledSize = (width / guidelineBaseWidth) * size;
  return scaledSize > size ? size : scaledSize;
};

export const verticalScale = (size: number): number => {
  const scaledSize = (height / guidelineBaseHeight) * size;
  return scaledSize > size ? size : scaledSize;
};

// Returns non-linear scale based on a resize factor.
export const moderateScale = (size: number, factor = 0.5): number => size + (scale(size) - size) * factor;
