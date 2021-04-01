import React from "react";

/**
 * this is main context to be used to override default label factory
 * by passing this context we could decorate or modify accessibility label how we
 * want from within Framework
 *
 * Potential use cases - addition of realware specific tags
 * usage of custom labels for UI Automation builds
 */
const AccessibilityLabelFactory = React.createContext({});

// eslint-disable-next-line import/no-default-export
export default AccessibilityLabelFactory;
