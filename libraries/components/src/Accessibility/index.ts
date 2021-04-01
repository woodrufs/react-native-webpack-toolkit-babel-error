import { withAccessibilityContext, IWithAccessibilityLabelFactory } from "./withAccessibilityContext.hoc";

import AccessibilityLabelFactory from "./AccessibilityLabelFactoryContext";
// import accessibilityLabelFactoryDefault from "./AccessibilityLabelFactoryDefault";
import componentTypes, { ComponentTypes } from "./componentTypes";
import { componentIDs, ComponentIDs } from "./componentIDs";
import generateComponentId from "./componentIDs.helpers";
// import { AccessibilityLabelFactoryConfig } from "./AccessibilityLabelFactory.model";
// import { AccessibilityLabelFactoryType } from "./AccessibilityLabelFactory.model";
// import AccessibilityLabelFactoryDefault from "../Accessibility/AccessibilityLabelFactoryDefault";
// import { AccessibilityLabelFactoryConfig } from "./AccessibilityLabelFactory.model";
export {
  withAccessibilityContext,
  AccessibilityLabelFactory,
  // accessibilityLabelFactoryDefault,
  componentTypes,
  componentIDs,
  generateComponentId
};

export type { ComponentTypes, ComponentIDs, IWithAccessibilityLabelFactory };
export type { AccessibilityProps } from "./AccessibilityProps.model";
export type { AccessibilityLabelFactoryType, AccessibilityLabelFactoryConfig } from "./AccessibilityLabelFactory.model";
