import * as React from "react";
import { View, ViewStyle } from "react-native";

interface IDialogButtonProps {
  children: React.ReactNode;
}

const DialogButtons: React.FC<IDialogButtonProps> = ({ children }: IDialogButtonProps) => {
  const childrenCount = React.Children.count(children);
  const buttonsContainerStyles: ViewStyle[] =
    childrenCount > 2
      ? [stylesheet.buttonsContainer, { flexDirection: "column" }]
      : [stylesheet.buttonsContainer, { flexDirection: "row" }];

  return <View style={[buttonsContainerStyles, childrenCount < 2 && stylesheet.soloButtonContainer]}>{children}</View>;
};

interface IStyles {
  buttonsContainer: ViewStyle;
  soloButtonContainer: ViewStyle;
}
const stylesheet: IStyles = {
  buttonsContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  soloButtonContainer: {
    justifyContent: "center"
  }
};

export { DialogButtons, IDialogButtonProps };
