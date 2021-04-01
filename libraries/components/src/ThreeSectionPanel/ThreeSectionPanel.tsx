import * as React from "react";
import { View, ViewStyle } from "react-native";

import { Panel } from "../Panel";
import { MuxText } from "../MuxText";
import { Colors, defaultTextIndent, sectionMinHeight } from "../styles";

interface IThreeSectionPanelProps {
  noMarginTop?: boolean;
  header: React.ReactNode;
  firstLabel: string;
  firstValue: string;
  secondLabel: string;
  secondValue: string;
  style?: ViewStyle;
  footerStyle?: ViewStyle;
}

const ThreeSectionPanel: React.FC<IThreeSectionPanelProps> = ({
  noMarginTop,
  header,
  firstLabel,
  firstValue,
  secondLabel,
  secondValue,
  style,
  footerStyle
}: IThreeSectionPanelProps) => {
  const lowerLeftText = `${firstLabel}${firstValue}`;
  const lowerRightText = `${secondLabel}${secondValue}`;
  const computedFooterStyle = [stylesheet.footer, footerStyle];

  return (
    <Panel noMarginTop={noMarginTop} style={style}>
      {header}
      <View style={computedFooterStyle}>
        <View style={stylesheet.textWrapper}>
          <MuxText align="left" numberOfLines={2}>
            {lowerLeftText}
          </MuxText>
        </View>
        <View style={stylesheet.textWrapper}>
          <MuxText align="right" numberOfLines={2}>
            {lowerRightText}
          </MuxText>
        </View>
      </View>
    </Panel>
  );
};

interface IStyles {
  footer: ViewStyle;
  textWrapper: ViewStyle;
}
const stylesheet: IStyles = {
  footer: {
    minHeight: sectionMinHeight,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: defaultTextIndent,
    backgroundColor: Colors.grayIron
  },
  textWrapper: {
    width: 0,
    flexGrow: 1,
    justifyContent: "center"
  }
};

export { ThreeSectionPanel, IThreeSectionPanelProps };
