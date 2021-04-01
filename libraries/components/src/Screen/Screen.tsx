import * as React from "react";
import { ScrollView, ViewStyle } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { isIos } from "../helpers";
import { Colors, defaultIndent } from "../styles";

interface IScreenProps {
  children?: React.ReactNode;
  contentContainerStyle?: ViewStyle;
  alwaysBounceVertical?: boolean;
  autoScrollToFocusedInput?: boolean;
  automaticallyAdjustContentInsets?: boolean;
}

const Screen: React.FC<IScreenProps> = ({
  children,
  contentContainerStyle,
  alwaysBounceVertical = false,
  autoScrollToFocusedInput,
  automaticallyAdjustContentInsets = false,
  ...props
}: IScreenProps) => {
  const containerStyles = [stylesheet.container, contentContainerStyle];
  const ScrollComponent = autoScrollToFocusedInput && isIos ? KeyboardAwareScrollView : ScrollView;

  return (
    <ScrollComponent
      contentContainerStyle={containerStyles}
      alwaysBounceVertical={alwaysBounceVertical}
      automaticallyAdjustContentInsets={automaticallyAdjustContentInsets}
      {...props}
    >
      {children}
    </ScrollComponent>
  );
};

interface IStyles {
  container: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    minHeight: "100%",
    width: "100%",
    backgroundColor: Colors.white,
    alignItems: "center",
    padding: defaultIndent
  }
};

export { Screen, IScreenProps };
