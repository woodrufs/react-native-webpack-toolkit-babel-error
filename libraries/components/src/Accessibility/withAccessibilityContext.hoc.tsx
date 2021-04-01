import * as React from "react";
import { AccessibilityLabelFactoryConfig } from "./AccessibilityLabelFactory.model";
import AccessibilityLabelFactory from "./AccessibilityLabelFactoryContext";

export interface IWithAccessibilityLabelFactory {
  accessibilityLabelFactory: (
    title?: string,
    config?: AccessibilityLabelFactoryConfig
  ) => { accessible?: boolean; accessibilityLabel?: string; tetsID?: string };
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Diff<T, K> = Omit<T, keyof K>;
type WithOnChangeProps = IWithAccessibilityLabelFactory;

const withAccessibilityContext = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<Diff<P, WithOnChangeProps>> => {
  return function AccessibilityComponent({ ...props }) {
    const factory = (_title: string, _config: any) => {};
    return (
      <AccessibilityLabelFactory.Consumer>
        {() => <Component {...(props as P)} accessibilityLabelFactory={factory} />}
      </AccessibilityLabelFactory.Consumer>
    );
  };
};

export { withAccessibilityContext };
