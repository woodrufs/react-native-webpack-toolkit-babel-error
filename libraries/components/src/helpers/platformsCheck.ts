import { Dimensions, Platform } from "react-native";

/**
 * Returns true is platform is iOS; otherwise false.
 */
export const isIos = Platform.OS === "ios";

/**
 * Returns true is platform is android; otherwise false.
 */
export const isAndroid = Platform.OS === "android";

/**
 * Returns true is platform is windows; otherwise false.
 */
export const isWindows = Platform.OS === "windows";

/**
 * Returns true if device is iPhone X. Otherwise false;
 */
export const isIphoneX = (): boolean => {
  const { height, width } = Dimensions.get("window");

  return Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS && (height === 812 || width === 812);
};
