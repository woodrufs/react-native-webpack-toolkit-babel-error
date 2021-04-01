import * as React from "react";
import { TextStyle } from "react-native";
import { Icon } from "../../Icon";
import { Colors, defaultIndent } from "../../styles";
import { scale } from "../../helpers";

interface ICaretIconProps {
  isExpanded?: boolean;
  style?: TextStyle;
}

const CaretIcon: React.FC<ICaretIconProps> = ({ isExpanded, style }: ICaretIconProps) => {
  const caretIconStyles = [styles.caretIcon, { transform: [{ rotate: `${isExpanded ? "270" : "90"}deg` }] }, style];

  return <Icon style={caretIconStyles} name="rectangle" color={Colors.blue} size={scale(26)} />;
};

interface IStyles {
  caretIcon: TextStyle;
}

const styles: IStyles = {
  caretIcon: {
    marginHorizontal: defaultIndent
  }
};

export { CaretIcon, ICaretIconProps };
