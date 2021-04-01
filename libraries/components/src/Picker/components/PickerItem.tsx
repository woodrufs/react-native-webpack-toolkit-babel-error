import * as React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { MuxText } from "../..";
import { scale } from "../../helpers";
import { Colors, borderRadius, borderWidth } from "../../styles";
import { itemHeight } from "../shared/styles";

interface IPickerItem {
  label: string;
  value: any;
}
interface IPickerItemProps {
  item: IPickerItem;
  isSelected: boolean;
  togglePicker: () => any;
  onPress: (value: any) => any;
}

const PickerItem: React.FC<IPickerItemProps> = (props: IPickerItemProps) => {
  const { onPress, togglePicker, item, isSelected } = props;
  const backgroundColor = isSelected ? Colors.blueDark : Colors.transparent;
  const fontColor = isSelected ? Colors.white : Colors.blue;
  const itemStyle = [stylesheet.container, { backgroundColor }];

  const _onPress = () => {
    onPress(item.value);
    togglePicker();
  };
  return (
    <TouchableOpacity style={itemStyle} activeOpacity={0.5} onPress={_onPress}>
      <MuxText size={scale(18)} color={fontColor} align="center">
        {item.label}
      </MuxText>
    </TouchableOpacity>
  );
};

interface IStyles {
  container: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    marginHorizontal: scale(30),
    justifyContent: "center",
    alignItems: "center",
    minHeight: itemHeight,
    marginBottom: scale(20),
    borderRadius,
    borderWidth,
    borderColor: Colors.blue
  }
};

export { PickerItem, IPickerItem, IPickerItemProps };
