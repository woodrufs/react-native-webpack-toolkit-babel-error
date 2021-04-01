import * as React from "react";
import { TextStyle, View, ViewStyle } from "react-native";

import { CustomButton } from "../CustomButton";
import { MuxText } from "../../MuxText";

import { sharedButtonStyles, dialogContentButtonUnderlayColor as defaultUnderlayColor } from "../shared";
import { Colors, fontColor } from "../../styles";
import { scale } from "../../helpers";

interface IContactsDialogButtonProps {
  title: string;
  titleColor?: string;
  description: string;
  descriptionColor?: string;
  disabled?: boolean;
  style?: ViewStyle;
  onPress?: () => unknown;
}

const ContactsDialogButton: React.FC<IContactsDialogButtonProps> = ({
  title,
  titleColor = fontColor,
  description,
  descriptionColor = Colors.blue,
  disabled,
  style,
  onPress
}: IContactsDialogButtonProps) => {
  return (
    <CustomButton
      disabled={disabled}
      style={[sharedButtonStyles.dialogContentButton, style] as ViewStyle}
      underlayColor={defaultUnderlayColor}
      onPress={onPress}
    >
      <View style={stylesheet.contentWrapper}>
        <MuxText color={titleColor} style={stylesheet.title}>
          {title}
        </MuxText>
        <MuxText color={descriptionColor} style={stylesheet.description}>
          {description}
        </MuxText>
      </View>
    </CustomButton>
  );
};

interface IStyles {
  contentWrapper: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}
const stylesheet: IStyles = {
  contentWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: scale(60)
  },
  title: {
    fontSize: scale(15),
    marginBottom: scale(3)
  },
  description: {
    fontSize: scale(18)
  }
};

export { ContactsDialogButton, IContactsDialogButtonProps };
