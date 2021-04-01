import Haptic, { HapticFeedbackTypes } from "react-native-haptic-feedback";

const triggerHaptic = (type: HapticFeedbackTypes) =>
  Haptic.trigger(type, { enableVibrateFallback: true, ignoreAndroidSystemSettings: true });

export const impactHeavy = () => triggerHaptic("impactHeavy");
export const impactLight = () => triggerHaptic("impactLight");
export const impactMedium = () => triggerHaptic("impactMedium");
export const notificationError = () => triggerHaptic("notificationError");
export const notificationSuccess = () => triggerHaptic("notificationSuccess");
export const notificationWarning = () => triggerHaptic("notificationWarning");
export const selection = () => triggerHaptic("selection");
