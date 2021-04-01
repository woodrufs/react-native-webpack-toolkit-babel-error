import * as React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export interface IStoryProps {
  children?: unknown;
}

export const CenterView = ({ children }: IStoryProps) => {
  const node = children as JSX.Element;
  return <View style={styles.main}>{node}</View>;
};
