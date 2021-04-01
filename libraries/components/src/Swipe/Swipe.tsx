import * as React from "react";
import {
  View,
  ScrollView,
  Dimensions,
  ViewStyle,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  NativeScrollEvent
} from "react-native";
import PagerView, { PagerViewOnPageSelectedEvent } from "react-native-pager-view";
import { isAndroid } from "../helpers";

interface ISwipeProps {
  children: React.ReactNode;
  index: number;
  containerStyle?: ViewStyle;
  scrollViewStyle?: ViewStyle;
  style?: ViewStyle;
  onSwipeEnd?: (index: number) => any;
}

interface ISwipeState {
  width: number;
  height: number;
  offset: { x: number };
  total: number;
  index: number;
}

class Swipe extends React.Component<ISwipeProps, ISwipeState> {
  static defaultProps = {
    index: 0
  };

  constructor(props: ISwipeProps) {
    super(props);
    const total = React.Children.count(props.children);
    const { width, height } = Dimensions.get("window");

    this.state = {
      width,
      height,
      offset: {
        x: width * props.index
      },
      total,
      index: total > 1 ? Math.min(props.index, total - 1) : 0
    };
  }

  onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;

    if (!this.state.offset || width !== this.state.width || height !== this.state.height) {
      const offset = this.state.total > 1 ? { x: width * this.state.index } : { x: 0 };

      this.setState({ width, height, offset });
    } else {
      this.setState({ width, height });
    }
  };

  onScrollEnd = (event: PagerViewOnPageSelectedEvent | NativeSyntheticEvent<NativeScrollEvent>) => {
    const { onSwipeEnd } = this.props;
    let offset: { x: number };
    if (event as PagerViewOnPageSelectedEvent) {
      const androidEvent: PagerViewOnPageSelectedEvent = event as PagerViewOnPageSelectedEvent;
      offset = { x: androidEvent.nativeEvent.position * this.state.width };
    } else {
      const iOSEvent = event as NativeSyntheticEvent<NativeScrollEvent>;
      offset = iOSEvent.nativeEvent.contentOffset;
    }

    if (onSwipeEnd) {
      onSwipeEnd(this.state.index);
    }

    this.updateIndex(offset);
  };

  updateIndex = (offset: { x: number }) => {
    const diff = offset.x - this.state.offset.x;
    // Do nothing if offset no change.
    if (!diff) return;

    const { index, width } = this.state;
    const newIndex = index + Math.round(diff / width);

    this.setState({ offset, index: newIndex });
  };

  renderScrollView = () => {
    const { children, style, scrollViewStyle } = this.props;
    const { width, height, total, offset, index } = this.state;
    const pageStyle = [{ width, height }, stylesheet.slide];

    if (total <= 1) {
      return <View style={pageStyle}>{children}</View>;
    }

    const pages = React.Children.map(children, (page, i) => (
      <View style={pageStyle} key={i}>
        {page}
      </View>
    ));

    if (isAndroid) {
      return (
        <PagerView
          initialPage={index}
          onPageSelected={this.onScrollEnd}
          key={pages.length}
          style={[stylesheet.viewPagerStyle, style]}
        >
          {pages}
        </PagerView>
      );
    }

    return (
      <ScrollView
        contentContainerStyle={[stylesheet.scrollViewStyle, style]}
        contentOffset={{ x: offset.x, y: 0 }}
        onMomentumScrollEnd={this.onScrollEnd}
        style={scrollViewStyle}
        horizontal
        pagingEnabled
        removeClippedSubviews
        bounces={false}
        scrollsToTop={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
      >
        {pages}
      </ScrollView>
    );
  };

  render() {
    const { containerStyle } = this.props;

    return (
      <View style={[stylesheet.container, containerStyle]} onLayout={this.onLayout}>
        {this.renderScrollView()}
      </View>
    );
  }
}

interface IStyles {
  container: ViewStyle;
  scrollViewStyle: ViewStyle;
  viewPagerStyle: ViewStyle;
  slide: ViewStyle;
}
const backgroundColor = "##ffffff";
const stylesheet: IStyles = {
  container: {
    backgroundColor,
    position: "relative",
    flex: 1
  },

  scrollViewStyle: {
    backgroundColor
  },

  viewPagerStyle: {
    backgroundColor,
    flex: 1
  },

  slide: {
    backgroundColor
  }
};

export { Swipe, ISwipeProps };
