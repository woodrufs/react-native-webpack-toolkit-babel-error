import * as React from "react";
import { FlatList, FlatListProps, ListRenderItem, View, ViewStyle } from "react-native";
import { scale } from "../helpers";
import { LoadingIndicator } from "../LoadingIndicator";
import { defaultMarginTop } from "../styles";

interface IEndlessScrollListProps<P> extends FlatListProps<P> {
  isDataLoading?: boolean;
  loadingIndicatorSize?: number;
}

class EndlessScrollList<P> extends React.Component<IEndlessScrollListProps<P>> {
  render() {
    const { isDataLoading, loadingIndicatorSize } = this.props;
    const loadingIndicator = isDataLoading ? (
      <View style={stylesheet.loadingIndicator}>
        <LoadingIndicator size={loadingIndicatorSize} />
      </View>
    ) : null;

    return <FlatList ListFooterComponent={loadingIndicator} {...this.props} />;
  }
}

interface IStyles {
  loadingIndicator: ViewStyle;
}
const stylesheet: IStyles = {
  loadingIndicator: {
    flex: 1,
    alignItems: "center",
    minHeight: scale(25),
    marginTop: defaultMarginTop,
    marginBottom: scale(10)
  }
};

export { EndlessScrollList, IEndlessScrollListProps };
