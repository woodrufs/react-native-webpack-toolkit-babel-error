import { isAndroid, isIos, isWindows, isIphoneX } from "./platformsCheck";
import { isLandscapeMode } from "./orientationCheck";
import { scale, verticalScale, moderateScale } from "./scaleUtility";
import { withValidTableRowParams } from "./withValidTableRowParams.hoc";

export {
  isAndroid,
  isIos,
  isWindows,
  isIphoneX,
  isLandscapeMode,
  scale,
  verticalScale,
  moderateScale,
  withValidTableRowParams
};
