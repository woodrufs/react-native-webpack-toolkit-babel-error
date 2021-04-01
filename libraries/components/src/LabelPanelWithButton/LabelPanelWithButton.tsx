import * as React from "react";
import { View, ViewStyle } from "react-native";

import { LabelPanel } from "../LabelPanel";
import { Button } from "../Button";
import { defaultIndent, sectionMinHeight } from "../styles";

interface ILabelPanelWithButtonProps {
  label: string;
  children?: React.ReactNode;
  iconButton: string;
  disableBorders?: boolean;
  noMarginTop?: boolean;
  onButtonPress: () => void;
}

const LabelPanelWithButton: React.FC<ILabelPanelWithButtonProps> = ({
  label,
  children,
  iconButton,
  disableBorders,
  noMarginTop,
  onButtonPress
}: ILabelPanelWithButtonProps) => {
  return (
    <LabelPanel label={label} disableBorders={disableBorders} noMarginTop={noMarginTop}>
      <View style={stylesheet.fieldContainer}>
        {children}
        <Button style={stylesheet.actionButton} icon={iconButton} onPress={onButtonPress} />
      </View>
    </LabelPanel>
  );
};

interface IStyles {
  actionButton: ViewStyle;
  fieldContainer: ViewStyle;
}
const stylesheet: IStyles = {
  actionButton: {
    alignSelf: "stretch",
    height: sectionMinHeight,
    minWidth: sectionMinHeight,
    marginLeft: defaultIndent
  },
  fieldContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  }
};

export { LabelPanelWithButton, ILabelPanelWithButtonProps };
