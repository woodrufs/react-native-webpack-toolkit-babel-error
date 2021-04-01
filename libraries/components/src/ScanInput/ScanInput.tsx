import * as React from "react";
import { Input, IInputProps } from "../Input";
import { ExpandablePanel } from "../ExpandablePanel";

import { TextStyle, ViewStyle } from "react-native";
import { Colors, fontWeight, fontFamily, fontSize } from "../styles";
import { scale } from "../helpers";

interface IScanInputProps extends IInputProps {
  inputValue: string;
  inputIcon?: string;
  inputIconColor?: string;
  panelIcon?: string;
  panelIconDisabled?: boolean;
  panelIconBackgroundColor?: string;
  onInputIconPress?: () => void;
  onPanelIconPress?: () => void;
  disableBorders?: boolean;
  smallInputIcon?: boolean;
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
}

const ScanInput: React.FC<IScanInputProps> = ({
  disabled,
  inputValue,
  inputIcon,
  inputIconColor,
  panelIcon,
  panelIconDisabled,
  panelIconBackgroundColor,
  disableBorders,
  smallInputIcon,
  onInputIconPress,
  onPanelIconPress,
  containerStyle,
  inputContainerStyle,
  ...inputProps
}: IScanInputProps) => {
  const iconStyle = [
    smallInputIcon && {
      fontSize: inputIconIconSmallSize
    },
    {
      color: inputIconColor || defaultInputIconColor
    }
  ] as TextStyle;
  const inputStyle = [inputContainerStyle, disabled && stylesheet.disabled] as ViewStyle;

  return (
    <ExpandablePanel
      noMarginTop
      disableBorders={disableBorders}
      label={
        <Input
          {...inputProps}
          disabled={disabled}
          value={inputValue}
          icon={inputIcon}
          iconStyle={iconStyle}
          inputStyle={stylesheet.text}
          containerStyle={inputStyle}
          onIconPress={onInputIconPress}
        />
      }
      icon={panelIcon || "scan"}
      iconDisabled={panelIconDisabled}
      iconSize={expandablePanelIconSize}
      color={expandablePanelIconColor}
      backgroundColor={panelIconBackgroundColor || expandablePanelIconBackgroundColor}
      onIconPress={onPanelIconPress}
      panelStyle={containerStyle}
    />
  );
};

interface IStyles {
  disabled: ViewStyle;
  text: TextStyle;
}
const expandablePanelIconColor = Colors.white;
const expandablePanelIconBackgroundColor = Colors.blue;
const expandablePanelIconSize = scale(30);
const inputIconIconSmallSize = fontSize;
const defaultInputIconColor = Colors.blue;

const stylesheet: IStyles = {
  disabled: {
    opacity: 0.5,
    backgroundColor: Colors.grayIron
  },
  text: {
    fontSize: scale(26),
    fontFamily,
    fontWeight,
    paddingRight: scale(10)
  }
};

export { ScanInput, IScanInputProps };
