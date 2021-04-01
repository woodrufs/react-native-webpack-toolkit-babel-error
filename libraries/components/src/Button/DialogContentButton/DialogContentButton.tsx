import * as React from "react";
import { ViewStyle } from "react-native";

import { Button } from "../Button";
import { ButtonSize } from "../CustomButton";

import { sharedButtonStyles, dialogContentButtonUnderlayColor as defaultUnderlayColor } from "../shared";
import { Colors } from "../../styles";

interface IDialogContentButtonProps {
  title?: string;
  size?: ButtonSize;
  style?: ViewStyle;
  disabled?: boolean;
  onPress?: () => unknown;
}
const DialogContentButton: React.FC<IDialogContentButtonProps> = ({
  title,
  size,
  style,
  disabled,
  onPress
}: IDialogContentButtonProps) => {
  return (
    <Button
      style={[sharedButtonStyles.dialogContentButton, style] as ViewStyle}
      disabled={disabled}
      title={title}
      size={size}
      underlayColor={defaultUnderlayColor}
      titleColor={Colors.blue}
      onPress={onPress}
    />
  );
};

export { DialogContentButton, IDialogContentButtonProps };
