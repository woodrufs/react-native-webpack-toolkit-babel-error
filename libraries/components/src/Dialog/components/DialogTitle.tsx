import * as React from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import { scale } from "../../helpers";
import { Icon } from "../../Icon";
import { MuxText } from "../../MuxText";
import { fontColor } from "../../styles";

interface IDialogTitleProps {
  title: string;
  titleIcon?: string;
}

const DialogTitle: React.FC<IDialogTitleProps> = ({ title, titleIcon }: IDialogTitleProps) => {
  return (
    <View style={stylesheet.container}>
      {titleIcon && <Icon name={titleIcon} style={stylesheet.icon} />}
      {/* TODO: MuxText used to have style style={stylesheet.dialogTitle}, but style never existed */}
      <MuxText bold align="center">
        {title}
      </MuxText>
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
  icon: TextStyle;
}

const stylesheet: IStyles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale(20)
  },
  icon: {
    fontSize: scale(20),
    color: fontColor,
    marginRight: scale(10)
  }
};

export { DialogTitle, IDialogTitleProps };
