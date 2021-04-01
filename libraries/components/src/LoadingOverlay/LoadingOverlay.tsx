import * as React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

import { LoadingIndicator } from "../LoadingIndicator";
import { Colors } from "../styles";

interface ILoadingOverlayProps {
  size?: number;
}

const LoadingOverlay: React.FC<ILoadingOverlayProps> = ({ size = 75 }: ILoadingOverlayProps) => {
  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.backDrop} />
      <LoadingIndicator size={size} />
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
  backDrop: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9998
  },
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.black,
    opacity: 0.4
  }
};

export { LoadingOverlay, ILoadingOverlayProps };
