import * as React from "react";
import { RefreshControl, ScrollView, ViewStyle } from "react-native";

import { Colors } from "../styles";

interface IPullToRefreshViewProps {
  isRefreshing: boolean;
  children: React.ReactNode;
  onRefresh: () => void;
}

const PullToRefreshView: React.FC<IPullToRefreshViewProps> = ({
  isRefreshing,
  children,
  onRefresh
}: IPullToRefreshViewProps) => {
  return (
    <ScrollView
      style={stylesheet.container}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[Colors.blue]}
          tintColor={Colors.blue}
        />
      }
    >
      {children}
    </ScrollView>
  );
};

interface IStyles {
  container: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    flex: 1,
    alignSelf: "stretch"
  }
};
export { PullToRefreshView, IPullToRefreshViewProps };
