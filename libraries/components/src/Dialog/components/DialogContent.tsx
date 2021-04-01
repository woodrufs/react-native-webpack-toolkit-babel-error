import * as React from "react";

import { ScrollView, ViewStyle } from "react-native";

import { scale } from "../../helpers";
import { borderWidth, Colors } from "../../styles";

interface IDialogContentProps {
  hasTopSeparator: boolean;
  hasBottomSeparator: boolean;
  children?: React.ReactNode;
}

const DialogContent: React.FC<IDialogContentProps> = ({
  hasTopSeparator,
  hasBottomSeparator,
  children
}: IDialogContentProps) => {
  const contentContainerStyles = [
    stylesheet.contentContainer,
    hasBottomSeparator ? stylesheet.contentWithBottomSeparator : null,
    hasTopSeparator ? stylesheet.contentWithTopSeparator : null
  ];

  return !!React.Children.count(children) ? (
    <ScrollView
      alwaysBounceVertical={false}
      style={stylesheet.container}
      contentContainerStyle={contentContainerStyles}
    >
      {children}
    </ScrollView>
  ) : null;
};

interface IStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  contentWithTopSeparator: ViewStyle;
  contentWithBottomSeparator: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    width: "100%"
  },
  contentContainer: {
    paddingBottom: scale(20),
    paddingHorizontal: scale(17),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  contentWithTopSeparator: {
    borderTopWidth: borderWidth,
    borderColor: Colors.grayAlto,
    paddingTop: scale(20)
  },
  contentWithBottomSeparator: {
    borderBottomWidth: borderWidth,
    borderColor: Colors.grayAlto,
    marginBottom: scale(20)
  }
};

export { DialogContent, IDialogContentProps };
