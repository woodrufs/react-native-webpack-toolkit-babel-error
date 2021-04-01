import { ComponentTypes } from "./componentTypes";
import { ComponentIDs } from "./componentIDs";

/**
 * @param componentType - type of a component used for identification of component
 * @param componentId - unique identifier of a component
 */
export type AccessibilityLabelFactoryConfig = {
  componentType?: ComponentTypes;
  componentId?: ComponentIDs;
};

/**
 * This is a type to be used for AccessibilityLabelFactory
 * it should return string, which will be used for
 * @param title - main title to be used in accessibility label
 * @param config - configuration of accessibilityLabelFactory
 * @returns {boolean, string, string} - object with accessible param and accessibilityLabel
 */
export type AccessibilityLabelFactoryType = (
  title?: string,
  config?: AccessibilityLabelFactoryConfig
) => { accessible?: boolean; accessibilityLabel?: string; tetsID?: string };
