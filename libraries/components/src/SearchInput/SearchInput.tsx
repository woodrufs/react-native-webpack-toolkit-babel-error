import * as React from "react";
import { TextStyle, View, ViewStyle } from "react-native";

import { BadgeButton, IBadgeButtonProps } from "../Button";
import { IInputProps, Input } from "../Input";

import { Colors, borderRadius } from "../styles";
import { scale } from "../helpers";

interface ISearchInputProps extends IInputProps {
  componentId?: string;
  inputStyle?: TextStyle;
  inputWrapperStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  leftButton?: IBadgeButtonProps;
  rightButton?: IBadgeButtonProps;
}

const SearchInput: React.FC<ISearchInputProps> = ({
  componentId,
  inputStyle,
  inputWrapperStyle,
  containerStyle,
  leftButton,
  rightButton,
  ...inputProps
}: ISearchInputProps) => {
  return (
    <View style={[stylesheet.container, containerStyle]}>
      {leftButton && (
        <BadgeButton style={stylesheet.button} containerStyle={stylesheet.buttonLeftContainer} {...leftButton} />
      )}
      <View style={[stylesheet.inputWrapperStyle, inputWrapperStyle]}>
        <Input
          icon="search"
          placeholder="Search"
          // TODO: Why is casting this to a TextStyle necessary?
          inputStyle={[stylesheet.inputStyle, inputStyle] as TextStyle}
          {...inputProps}
        />
      </View>
      {rightButton && (
        <BadgeButton style={stylesheet.button} containerStyle={stylesheet.buttonRightContainer} {...rightButton} />
      )}
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
  buttonLeftContainer: ViewStyle;
  buttonRightContainer: ViewStyle;
  button: ViewStyle;
  inputWrapperStyle: ViewStyle;
  inputStyle: TextStyle;
}
const buttonSideSize = scale(50);
const buttonMargin = scale(10);

const stylesheet: IStyles = {
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%"
  },
  buttonLeftContainer: {
    marginRight: buttonMargin
  },
  buttonRightContainer: {
    marginLeft: buttonMargin
  },
  button: {
    height: buttonSideSize,
    width: buttonSideSize
  },
  inputWrapperStyle: {
    borderRadius,
    backgroundColor: Colors.white,
    flex: 1
  },
  inputStyle: {
    fontWeight: "normal"
  }
};

export { SearchInput, ISearchInputProps };
