import { Vibration } from "react-native";

const { vibrate } = Vibration;
const VIBRATION_PATTERNS = {
  impactHeavy: [0, 70],
  impactLight: [0, 30],
  impactMedium: [0, 50],
  notificationError: [0, 40, 80, 60, 80, 80],
  notificationSuccess: [0, 90, 110, 30],
  notificationWarning: [0, 30, 10, 30, 90, 100]
};

export const impactHeavy = () => vibrate(VIBRATION_PATTERNS.impactHeavy);
export const impactLight = () => vibrate(VIBRATION_PATTERNS.impactLight);
export const impactMedium = () => vibrate(VIBRATION_PATTERNS.impactMedium);
export const notificationError = () => vibrate(VIBRATION_PATTERNS.notificationError);
export const notificationSuccess = () => vibrate(VIBRATION_PATTERNS.notificationSuccess);
export const notificationWarning = () => vibrate(VIBRATION_PATTERNS.notificationWarning);
