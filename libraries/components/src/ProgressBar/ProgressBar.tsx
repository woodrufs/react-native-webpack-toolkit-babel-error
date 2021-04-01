import * as React from "react";
import { Platform, TextStyle, View, ViewStyle } from "react-native";
import { scale } from "../helpers";
import { MuxText } from "../MuxText";
import { Colors } from "../styles";

interface IProgressBarProps {
  value: number;
  text?: string;
}

const ProgressBar: React.FC<IProgressBarProps> = ({ value, text }: IProgressBarProps) => {
  const getProgressValue = () => text ?? `${value.toString()}%`;
  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.initialIndicatorValue} />
      <View style={stylesheet.indicatorContainer}>
        <View style={[stylesheet.indicator, { width: `${value.toString()}%` }]} />
        <View style={stylesheet.trianglePoint} />
      </View>
      <MuxText style={stylesheet.value}>{getProgressValue()}</MuxText>
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
  value: TextStyle;
  initialIndicatorValue: ViewStyle;
  indicatorContainer: ViewStyle;
  indicator: ViewStyle;
  trianglePoint: ViewStyle;
}
const defaultSize = scale(20);
const indicatorColor = Colors.green;

const stylesheet: IStyles = {
  container: {
    height: defaultSize,
    width: "100%",
    borderWidth: 0,
    backgroundColor: Colors.grayDark,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden"
  },
  value: {
    color: Colors.white,
    fontSize: scale(16),
    fontWeight: "bold",
    top: Platform.OS === "android" ? 1 : 0,
    lineHeight: scale(19),
    position: "absolute",
    right: defaultSize
  },
  initialIndicatorValue: {
    height: "100%",
    backgroundColor: indicatorColor,
    width: defaultSize / 2
  },
  indicatorContainer: {
    flex: 1,
    flexDirection: "row",
    height: "100%"
  },
  indicator: {
    height: "100%",
    backgroundColor: indicatorColor
  },
  trianglePoint: {
    transform: [{ rotate: "-25deg" }],
    width: defaultSize / 2,
    // Any big number to fill empty areas after rotate
    height: scale(40),
    backgroundColor: indicatorColor
  }
};

export { ProgressBar, IProgressBarProps };
