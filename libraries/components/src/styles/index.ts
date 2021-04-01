import { Colors } from "./colors";
import { scale } from "../helpers";

const activeOpacity = 0.9;
// NOTE: use round values for border radius to avoid iOS UI defects.
const borderRadius: number = Math.round(scale(3));
const borderWidth: number = scale(1);
const defaultIndent: number = scale(18);
const defaultMarginTop: number = scale(10);
const defaultTextIndent: number = scale(10);
const sectionMinHeight: number = scale(50);
const barButtonSize = scale(65);

const fontFamily = "Arial";
const fontSize: number = scale(18);
const fontColor: string = Colors.grayDark;
const fontWeight: any = "700";
const defaultFont = {
  fontFamily,
  fontSize,
  fontColor,
  fontWeight
};

export {
  activeOpacity,
  Colors,
  borderRadius,
  borderWidth,
  defaultIndent,
  defaultMarginTop,
  defaultTextIndent,
  sectionMinHeight,
  barButtonSize,
  fontFamily,
  fontSize,
  fontColor,
  fontWeight,
  defaultFont
};
