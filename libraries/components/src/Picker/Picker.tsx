import * as React from "react";
import { View, TouchableOpacity, ViewStyle, FlatList, TextStyle } from "react-native";
import { Button } from "../Button";
import { scale } from "../helpers";
import { MuxText } from "../MuxText";
import { Placeholder } from "../Placeholder";
import { Colors, borderRadius, borderWidth, fontFamily, fontWeight } from "../styles";
import { IPickerItem, PickerItem } from "./components";
import { itemHeight } from "./shared/styles";

interface IPickerProps {
  title?: string;
  items: IPickerItem[];
  open: boolean;
  selectedValue: any;
  toggle: () => any;
  onItemPress: (value: any) => any;
}
const Picker: React.FC<IPickerProps> = (props: IPickerProps) => {
  const { items, selectedValue, title, toggle, open } = props;
  let flatListRef = React.useRef<FlatList>(null);

  React.useEffect(() => {
    if (flatListRef && flatListRef.current) {
      const selectedItemIndex = items.findIndex((item) => item.value === selectedValue);
      const initialScrollIndex = selectedItemIndex === -1 ? 0 : selectedItemIndex;
      // FIXME: this hack related to issue: https://github.com/facebook/react-native/issues/13202
      // don't work with zero milliseconds
      // const wait = new Promise((resolve) => setTimeout(resolve, 10));
      // wait.then(() => {
      flatListRef.current.scrollToIndex({ animated: true, index: initialScrollIndex });
      // });
    }
  }, [flatListRef, selectedValue]);

  const setFlatListRef = (flatList: any) => {
    flatListRef = flatList;
  };

  const getItemLayout = (data: any, index: number) => ({
    length: itemHeight,
    offset: (itemHeight + baseIndent) * index,
    index
  });

  const keyExtractor = (item: IPickerItem) => item.label + String(item.value);

  const renderItem = ({ item }: any) => {
    const { selectedValue, onItemPress, toggle } = props;

    return (
      <PickerItem item={item} isSelected={selectedValue === item.value} onPress={onItemPress} togglePicker={toggle} />
    );
  };

  return open ? (
    <View style={stylesheet.container}>
      <TouchableOpacity style={stylesheet.overlay} activeOpacity={0.5} onPress={toggle} />
      <View style={stylesheet.listWrapper}>
        {!!title && <MuxText style={stylesheet.title}>{title}</MuxText>}
        {items.length ? (
          <FlatList
            ref={setFlatListRef}
            data={items}
            style={stylesheet.list}
            renderItem={renderItem}
            getItemLayout={getItemLayout}
            keyExtractor={keyExtractor}
            initialNumToRender={items.length}
          />
        ) : (
          <Placeholder label="No records found." />
        )}
        <View style={stylesheet.footer}>
          <Button icon="x" title="Cancel" size="medium" onPress={toggle} />
        </View>
      </View>
    </View>
  ) : null;
};

interface IStyles {
  container: ViewStyle;
  overlay: ViewStyle;
  listWrapper: ViewStyle;
  title: TextStyle;
  list: ViewStyle;
  footer: ViewStyle;
}
const baseIndent = scale(20);
const stylesheet: IStyles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: Colors.black,
    opacity: 0.3
  },
  listWrapper: {
    flex: 1,
    width: "85%",
    maxHeight: "80%",
    padding: baseIndent,
    borderRadius,
    borderWidth,
    borderColor: Colors.grayAlto,
    backgroundColor: Colors.white
  },
  list: {
    flex: 1
  },
  title: {
    marginBottom: baseIndent,
    fontWeight,
    fontFamily,
    textAlign: "center"
  },
  footer: {
    alignItems: "center",
    paddingTop: baseIndent,
    borderTopWidth: borderWidth,
    borderStyle: "solid",
    borderColor: Colors.grayAlto
  }
};

export { Picker, IPickerProps };
