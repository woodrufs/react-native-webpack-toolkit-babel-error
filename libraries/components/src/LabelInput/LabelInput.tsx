import * as React from "react";
import { View, Animated, TouchableOpacity, ViewStyle, LayoutChangeEvent, TextStyle } from "react-native";
import { Input, IInputProps } from "../Input";
import { Icon } from "../Icon";
import { LoadingOverlay } from "../LoadingOverlay";
import { MuxText } from "../MuxText";
import { Panel } from "../Panel";
import { Checkbox } from "../Checkbox";
import { Colors, defaultTextIndent, sectionMinHeight, borderRadius, fontWeight } from "../styles";
import { scale } from "../helpers";

interface ILabelInputProps extends IInputProps {
  componentId?: string;
  checkboxLabel?: string;
  isCheckboxChecked?: boolean;
  isLabelDisabled?: boolean;
  disableBorderRadius?: boolean;
  disableBorders?: boolean;
  disabledStyle?: ViewStyle;
  isLoading?: boolean;
  label: string;
  labelIcon?: string;
  labelIconColor?: string;
  labelTextColor?: string;
  labelContainerStyle?: ViewStyle;
  noMarginTop?: boolean;
  style?: ViewStyle;
  id?: string;
  onLabelPress?: (id?: string) => void;
  onLabelIconPress?: (id?: string) => void;
  onEndEditing?: () => void;
  onFocus?: () => void;
}

type LabelInputState = {
  labelContainerWidth: number;
  animationValue: Animated.Value;
};

class LabelInput extends React.PureComponent<ILabelInputProps, LabelInputState> {
  static defaultProps = {
    disableBorderRadius: false,
    disableBorders: false,
    noMarginTop: false,
    placeholder: ""
  };

  state = {
    labelContainerWidth: 0,
    animationValue: new Animated.Value(40)
  };

  onLabelPress = () => {
    const { label, id, onLabelPress } = this.props;

    if (onLabelPress) {
      onLabelPress(id ?? label);
    }
  };

  onLabelIconPress = () => {
    const { label, id, onLabelIconPress } = this.props;

    if (onLabelIconPress) {
      onLabelIconPress(id ?? label);
    }
  };

  getLabelWidth = (event: LayoutChangeEvent) => {
    this.setState({ labelContainerWidth: event.nativeEvent.layout.width });
  };

  handleOnFocus = () => {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus();
    }
    // TODO: look into
    // Animated.timing(this.state.animationValue, { toValue: 0, duration: 350 }).start();
  };

  handleOnEndEditing = () => {
    const { onEndEditing } = this.props;
    if (onEndEditing) {
      onEndEditing();
    }
    // TODO: look into
    // Animated.timing(this.state.animationValue, { toValue: 40, duration: 350 }).start();
  };

  handleOnLabelIconPress = () => {
    const { label, id, onLabelIconPress } = this.props;

    if (onLabelIconPress) {
      onLabelIconPress(id ?? label);
    }
  };

  // eslint-disable-next-line complexity
  render() {
    const iconSize = scale(30);
    const labelTextSize = scale(15);
    const checkboxColor = Colors.blue;

    const { labelContainerWidth, animationValue } = this.state;
    const {
      componentId,
      checkboxLabel,
      isCheckboxChecked,
      isLabelDisabled,
      isLoading,
      label,
      labelIcon,
      labelIconColor,
      labelTextColor,
      labelContainerStyle,
      noMarginTop,
      disableBorderRadius,
      disableBorders,
      style,
      onLabelIconPress,
      disabled,
      disabledStyle,
      ...inputProps
    } = this.props;

    const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

    const labelInputStyle = [
      stylesheet.container,
      noMarginTop && { marginTop: 0 },
      disableBorders && { borderWidth: 0 },
      disableBorderRadius && { borderRadius: 0 },
      style
    ] as ViewStyle;

    const inputRange = [0, 40];

    const labelContainerStyles = [
      stylesheet.labelContainer,
      disableBorderRadius && {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0
      },
      {
        left: animationValue.interpolate({
          inputRange,
          outputRange: [-labelContainerWidth, 0]
        }),
        opacity: animationValue.interpolate({
          inputRange,
          outputRange: [0, 1]
        }),
        paddingHorizontal: checkboxLabel
          ? 0
          : animationValue.interpolate({
              inputRange,
              outputRange: [0, defaultTextIndent]
            }),
        paddingRight: animationValue.interpolate({
          inputRange,
          outputRange: [0, defaultTextIndent]
        })
      },
      {
        flexDirection: checkboxLabel ? "column" : "row",
        alignItems: checkboxLabel ? "flex-end" : "center"
      },
      labelContainerStyle
    ] as Array<ViewStyle>;

    const inputStyle = [
      stylesheet.input,
      disabled && stylesheet.disabled,
      disabled && disabledStyle,
      disableBorderRadius && { borderRadius: 0 }
    ] as ViewStyle;

    const inputContainerStyle = {
      width: animationValue.interpolate({
        inputRange,
        outputRange: ["100%", "60%"]
      }),
      left: animationValue.interpolate({
        inputRange,
        outputRange: [-labelContainerWidth, 0]
      })
    };

    const labelTextStyle = [
      stylesheet.labelText,
      {
        flex: checkboxLabel ? 0 : 1,
        textAlign: checkboxLabel ? "left" : "right",
        fontSize: scale(15)
      }
    ] as TextStyle;

    const loadingIndicator = (
      <View style={stylesheet.loadingContainer}>
        <LoadingOverlay size={iconSize} />
      </View>
    );

    return (
      <Panel style={labelInputStyle} componentId={componentId ?? label}>
        <AnimatedTouchableOpacity
          style={labelContainerStyles}
          // TODO: look into
          // activeOpacity={ this.onLabelPress ? activeOpacity : 1 }
          disabled={isLabelDisabled}
          onLayout={this.getLabelWidth}
          onPress={this.onLabelPress}
        >
          {labelIcon && (
            <TouchableOpacity
              style={stylesheet.labelIconContainer}
              // TODO: look into
              // activeOpacity={ this.onLabelIconPress ? activeOpacity : 1 }
              onPress={this.onLabelIconPress}
            >
              <Icon style={stylesheet.labelIcon} name={labelIcon} color={labelIconColor} />
            </TouchableOpacity>
          )}
          <MuxText
            style={labelTextStyle}
            color={labelTextColor ?? Colors.grayDark}
            numberOfLines={2}
            size={labelTextSize}
          >
            {label.toUpperCase()}
          </MuxText>
          {checkboxLabel && (
            <TouchableOpacity
              style={stylesheet.checkboxContainer}
              // TODO: look into
              // activeOpacity={ this.onLabelIconPress ? activeOpacity : 1 }
              disabled={isLabelDisabled}
              onPress={this.onLabelPress}
            >
              <Checkbox
                style={stylesheet.checkbox}
                checkboxColor={checkboxColor}
                label={checkboxLabel.toUpperCase()}
                labelColor={checkboxColor}
                labelStyle={stylesheet.checkboxLabel}
                // TODO: doesnt exist
                // iconStyle={ styles.checkboxIcon }
                isChecked={isCheckboxChecked ?? false}
                isDisabled={isLabelDisabled}
                onChange={this.onLabelPress}
              />
            </TouchableOpacity>
          )}
        </AnimatedTouchableOpacity>
        <Animated.View style={inputContainerStyle}>
          {isLoading ? loadingIndicator : null}
          <Input
            {...inputProps}
            disabled={disabled}
            containerStyle={inputStyle}
            inputStyle={stylesheet.inputText}
            onFocus={this.handleOnFocus}
            onFocusEnd={this.handleOnEndEditing}
          />
        </Animated.View>
      </Panel>
    );
  }
}

interface IStyles {
  container: ViewStyle;
  labelContainer: ViewStyle;
  labelText: TextStyle;
  labelIconContainer: ViewStyle;
  labelIcon: TextStyle;
  input: ViewStyle;
  inputText: TextStyle;
  loadingContainer: ViewStyle;
  disabled: ViewStyle;
  checkboxContainer: ViewStyle;
  checkboxLabel: TextStyle;
  checkbox: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    flexDirection: "row",
    overflow: "hidden"
  },
  labelContainer: {
    width: "40%",
    height: sectionMinHeight,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: defaultTextIndent,
    backgroundColor: Colors.grayIron,
    borderBottomLeftRadius: borderRadius,
    borderTopLeftRadius: borderRadius
  },
  labelText: {
    flex: 1
  },
  labelIconContainer: {
    alignSelf: "center",
    marginRight: defaultTextIndent
  },
  labelIcon: {
    fontSize: scale(30)
  },
  input: {
    backgroundColor: Colors.white,
    height: sectionMinHeight,
    borderWidth: 0
  },
  inputText: {
    color: Colors.grayDark,
    borderRadius,
    borderColor: Colors.transparent,
    fontSize: scale(20),
    fontWeight,
    marginHorizontal: defaultTextIndent,
    textAlign: "left"
  },
  loadingContainer: {
    position: "absolute",
    zIndex: 1000,
    width: "100%",
    height: sectionMinHeight
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: Colors.grayIron
  },
  checkboxContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: scale(30)
  },
  checkboxLabel: {
    fontSize: scale(15),
    fontWeight: "bold"
  },
  checkbox: {
    width: scale(20),
    height: scale(20),
    borderWidth: 2
  }
};

export { LabelInput, ILabelInputProps };
