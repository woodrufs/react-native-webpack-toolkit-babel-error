import * as React from "react";
import { Animated, Easing, View, StyleSheet, ViewStyle } from "react-native";

import { Icon } from "../Icon";
import { Colors } from "../styles";
import { scale } from "../helpers";

interface ILoadingIndicatorProps {
  size: number;
}

type LoadingIndicatorState = {
  spinValue: Animated.Value;
};

class LoadingIndicator extends React.Component<ILoadingIndicatorProps, LoadingIndicatorState> {
  static defaultProps = {
    size: 40
  };

  state = {
    spinValue: new Animated.Value(0)
  };

  componentDidMount() {
    this.spin();
  }

  spin() {
    const { spinValue } = this.state;
    spinValue.setValue(0);
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start();
  }

  render() {
    const { size } = this.props;
    const { spinValue } = this.state;

    const widthCoefficient = 1.8;
    const heightCoefficient = 1.6;
    const xAxisCoefficient = 2.66;
    const yAxisCoefficient = 4.7;

    const calculatedStyles = StyleSheet.create({
      calculatedSize: {
        width: scale(size * widthCoefficient),
        height: scale(size * heightCoefficient)
      },
      topGearPosition: {
        right: scale(size / xAxisCoefficient),
        top: scale(size / yAxisCoefficient)
      },
      bottomGearPosition: {
        left: scale(size / xAxisCoefficient),
        bottom: scale(size / yAxisCoefficient)
      }
    });

    const topGearSpin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["360deg", "0deg"]
    });
    const bottomGearSpin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <View style={[stylesheet.container, calculatedStyles.calculatedSize]}>
        <View style={calculatedStyles.topGearPosition}>
          <Animated.View style={[stylesheet.gears, { transform: [{ rotate: topGearSpin }, { perspective: 1000 }] }]}>
            <Icon size={scale(size)} name="gear" color={Colors.blue} />
          </Animated.View>
        </View>
        <View style={calculatedStyles.bottomGearPosition}>
          <Animated.View style={[stylesheet.gears, { transform: [{ rotate: bottomGearSpin }, { perspective: 1000 }] }]}>
            <Icon size={scale(size)} name="gear" color={Colors.grayDark} />
          </Animated.View>
        </View>
      </View>
    );
  }
}

interface IStyles {
  container: ViewStyle;
  gears: ViewStyle;
}

const stylesheet: IStyles = {
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  gears: {
    backgroundColor: Colors.transparent
  }
};

export { LoadingIndicator, ILoadingIndicatorProps };
