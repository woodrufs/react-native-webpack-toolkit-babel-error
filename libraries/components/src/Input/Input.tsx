import * as React from "react";
import { View, TouchableOpacity, TextInput, Animated, TextStyle, StyleProp, ViewStyle } from "react-native";

import { getInputKeyboardType, handleInputText } from "./Input-helpers";
import { INPUT_TYPE, FORMAT_INPUT_RULES, InputType, FormatInputRule } from "./Input-types";
import { Colors, borderRadius, borderWidth, sectionMinHeight, fontSize, fontFamily } from "../styles";
import { isIos, scale } from "../helpers";
import { Icon } from "../Icon";

interface IInputProps {
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  disabled?: boolean;
  multiline?: boolean;
  iconDisabled?: boolean;
  fontWeight?: string;
  icon?: string;
  iconStyle?: TextStyle;
  inputStyle?: TextStyle;
  maxLength?: number;
  placeholder?: string;
  containerStyle?: ViewStyle;
  textAlign?: string;
  value?: string;
  type?: InputType;
  format?: FormatInputRule;
  // Needs to be checked after adding flow type for React.createRef
  textInputRef?: React.RefObject<TextInput>;
  onChangeText?: (text: string) => void;
  onIconPress?: () => void;
  onFocus?: () => void;
  onFocusEnd?: () => void;
  onTouchStart?: () => void;
}

type InputState = {
  focus: boolean;
};

class Input extends React.Component<IInputProps, InputState> {
  static defaultProps = {
    autoCapitalize: "none",
    maxLength: 50,
    textAlign: "left",
    fontWeight: "normal",
    type: INPUT_TYPE.Text
  };
  state = {
    focus: false
  };
  onChangeText = (text: string) => {
    const { onChangeText, format, type } = this.props;

    if (onChangeText) {
      onChangeText(handleInputText(text, format || (type && FORMAT_INPUT_RULES.get(type))));
    }
  };
  setInputFocusIn = () => {
    if (this.textInputRef.current) {
      this.textInputRef.current.focus();
    }
  };
  handleOnFocus = () => {
    if (this.props.onFocus) this.props.onFocus();
    this.setState({
      focus: true
    });
  };
  handleOnIconPress = () => {
    if (this.props.onIconPress) {
      this.props.onIconPress();
    } else {
      this.handleOnFocus();
      this.setInputFocusIn();
    }
  };
  handleOnEndEditing = () => {
    if (this.props.onFocusEnd) this.props.onFocusEnd();
    this.setState({
      focus: false
    });
  };
  hiddenInputRef = React.createRef();
  textInputRef = this.props.textInputRef || React.createRef();

  render() {
    const { focus } = this.state;
    const {
      autoCapitalize,
      disabled,
      multiline,
      fontWeight,
      icon,
      iconDisabled,
      iconStyle,
      inputStyle,
      maxLength,
      placeholder,
      containerStyle,
      textAlign,
      value,
      type,
      onTouchStart
    } = this.props;
    const borderColor = containerStyle?.borderColor ?? Colors.transparent;
    const containerStyles = [
      stylesheet.container,
      containerStyle,
      {
        borderColor: focus ? Colors.blueDark : borderColor || Colors.transparent
      } as ViewStyle
    ];
    const textInputStyles = [
      stylesheet.input,
      {
        textAlign,
        fontWeight
      } as TextStyle,
      inputStyle
    ];
    const iconStyles = [stylesheet.icon, iconStyle, focus && { color: Colors.blackLight }];
    return (
      <Animated.View style={containerStyles}>
        {
          // TODO: remove this comment to understand what they mean.
          // On iOS platform is not to possible to hide keyboard on taping disabled TextInput
          isIos && disabled && <View style={stylesheet.touchPlaceholder} />
        }
        <TextInput
          autoCapitalize={autoCapitalize ?? "none"}
          style={textInputStyles}
          value={value}
          placeholder={placeholder}
          editable={!disabled}
          selectionColor={Colors.blueDark}
          underlineColorAndroid={Colors.transparent}
          maxLength={maxLength}
          placeholderTextColor={Colors.grayMetallic}
          onChangeText={this.onChangeText}
          // TODO: This looks like it used by Windows
          // onSubmitEditing={this.onSubmitEditing}
          onFocus={this.handleOnFocus}
          ref={this.textInputRef}
          onEndEditing={this.handleOnEndEditing}
          keyboardType={getInputKeyboardType(type)}
          onTouchStart={onTouchStart}
          multiline={multiline}
        />
        {icon && (
          <TouchableOpacity
            disabled={iconDisabled !== undefined ? iconDisabled : disabled} // activeOpacity={ activeOpacity }
            style={stylesheet.touchableIconContainer}
            onPress={this.handleOnIconPress}
          >
            <Icon name={icon} style={iconStyles} />
          </TouchableOpacity>
        )}
      </Animated.View>
    );
  }
}

interface IStyles {
  container: ViewStyle;
  icon: TextStyle;
  input: TextStyle;
  touchableIconContainer: ViewStyle;
  touchPlaceholder: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    alignItems: "center",
    borderWidth,
    borderRadius,
    borderColor: Colors.transparent,
    flexDirection: "row",
    height: sectionMinHeight,
    overflow: "hidden"
  },
  icon: {
    color: Colors.blue,
    fontSize: scale(30),
    marginRight: scale(10)
  },
  input: {
    alignSelf: "stretch",
    borderRadius,
    backgroundColor: Colors.transparent,
    borderColor: Colors.transparent,
    color: Colors.grayDark,
    flex: 1,
    fontSize,
    fontFamily,
    marginHorizontal: scale(15),
    padding: 0
  },
  touchableIconContainer: {
    justifyContent: "center",
    height: "100%"
  },
  touchPlaceholder: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: Colors.transparent
  }
};

export { Input, IInputProps };
