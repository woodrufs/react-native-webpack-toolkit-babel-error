import * as React from "react";
import { Animated, TextStyle, TouchableWithoutFeedback, ViewStyle } from "react-native";
import { MuxText } from "../MuxText";
import { Colors, defaultTextIndent, borderRadius, sectionMinHeight } from "../styles";

export const toastItemTypeConfigs = {
  error: {
    color: Colors.red,
    timeoutDuration: 10000,
    automationTimeoutDuration: 60000
  },
  warning: {
    color: Colors.amber,
    timeoutDuration: 10000,
    automationTimeoutDuration: 60000
  },
  success: {
    color: Colors.green,
    timeoutDuration: 10000,
    automationTimeoutDuration: 60000
  }
};

export type ToastItemType = keyof typeof toastItemTypeConfigs;

interface IToastItemProps {
  message: string;
  type: ToastItemType;
  animationDuration?: number;
  isVisible: boolean;
  onHide: (id: number) => void;
  id: number;
}

type ToastItemState = {
  opacity: Animated.Value;
};

class ToastItem extends React.Component<IToastItemProps, ToastItemState> {
  static defaultProps = {
    animationDuration: 200,
    isVisible: true,
    type: "error" as ToastItemType
  };

  state: ToastItemState = {
    opacity: new Animated.Value(0)
  };

  componentDidMount = () => {
    const { isVisible } = this.props;
    if (isVisible) {
      this.animate(true);
    }
  };

  shouldComponentUpdate = (nextProps: IToastItemProps) => {
    const { isVisible } = this.props;
    return nextProps.isVisible !== isVisible;
  };

  componentDidUpdate = () => {
    const { isVisible } = this.props;
    this.animate(isVisible);
  };

  onPress = () => this.animate(false);

  animate = (show: boolean) => {
    const { animationDuration, id, onHide } = this.props;
    const { opacity } = this.state;
    const animation = Animated.timing(opacity, {
      toValue: show ? 1 : 0,
      duration: animationDuration,
      useNativeDriver: true
    });

    if (show) {
      animation.start();
    } else {
      animation.start(() => onHide(id));
    }
  };

  render() {
    const { message, type } = this.props;
    const { opacity } = this.state;
    const { toastItem: toastItemStyles, toastText: textStyle } = stylesheet;
    const combinedStyles = [
      toastItemStyles,
      {
        opacity,
        backgroundColor: toastItemTypeConfigs[type].color
      }
    ];
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <Animated.View style={combinedStyles}>
          <MuxText color={Colors.white} style={textStyle}>
            {message.toUpperCase()}
          </MuxText>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

interface IStyles {
  toastItem: ViewStyle;
  toastText: TextStyle;
}
const stylesheet: IStyles = {
  toastItem: {
    width: "100%",
    minHeight: sectionMinHeight,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius
  },
  toastText: {
    textAlign: "center",
    margin: defaultTextIndent
  }
};

export { ToastItem, IToastItemProps };
