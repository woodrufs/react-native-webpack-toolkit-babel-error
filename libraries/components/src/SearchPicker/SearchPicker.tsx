import * as React from "react";
import { View, TouchableOpacity, ViewStyle } from "react-native";

import { Input } from "../Input";
import { MuxText } from "../MuxText";
import { Placeholder } from "../Placeholder";
import { EndlessScrollList } from "../EndlessScrollList";

import { Colors } from "../styles";
import { scale } from "../helpers";
import { ISearchPickerItem, ISearchPickerProps, SearchPickerSelection } from "./SearchPicker-types";

interface ISearchPickerState {
  searchValue: string;
}

class SearchPicker extends React.Component<ISearchPickerProps, ISearchPickerState> {
  static defaultProps = {
    isMultiselect: false,
    isDataLoading: false,
    searchValue: ""
  };

  componentWillMount() {
    this.setState({ searchValue: this.props.searchValue });
  }

  onSearchInputChange = (searchValue: string) => {
    const { onSearchInputChange } = this.props;
    if (onSearchInputChange) onSearchInputChange(searchValue);

    this.setState({ searchValue });
  };

  onItemPress = (item: ISearchPickerItem) => {
    const { key } = item;
    const {
      onItemSelected,
      onApplyPickerSelection,
      isMultiselect,
      selected,
      isValueRequired,
      onItemPress
    } = this.props;

    // this is needed to not make breaking changes
    // TODO: remove this as soon as all pickers
    // use the onApplyPickerSelection and onItemSelected props
    if (!onItemSelected || !onApplyPickerSelection) {
      onItemPress(item);
      return;
    }

    const currentSelection = selected || [];

    if (isMultiselect) {
      const itemIndex = currentSelection.indexOf(key);
      let newSelection: SearchPickerSelection = [...currentSelection];

      if (itemIndex < 0) {
        newSelection = [...newSelection, key];
      } else {
        newSelection.splice(itemIndex, 1);
      }

      onItemSelected(newSelection.length > 0 ? newSelection : []);
    } else {
      const isItemDeselected = key === selected;
      const selection = isItemDeselected ? undefined : key;

      if (isItemDeselected && isValueRequired) return;
      onItemSelected(selection);
      onApplyPickerSelection();
    }
  };

  get filteredItems(): ISearchPickerItem[] {
    const { items } = this.props;
    const { searchValue } = this.state;

    const searchValueUpper = searchValue.toUpperCase();
    const filterBySearchValue = (item: ISearchPickerItem) => item.value.toUpperCase().startsWith(searchValueUpper);

    return searchValueUpper ? items.filter(filterBySearchValue) : items;
  }

  createOnItemPressHandler = (item: ISearchPickerItem) => () => this.onItemPress(item);
  keyExtractor = (item: ISearchPickerItem) => item.key;

  renderListItem = ({ item }: any) => {
    const { isMultiselect, selected } = this.props;

    const isSelected = selected && (isMultiselect ? selected.includes(item.key) : selected === item.key);

    const itemStyle = [
      stylesheet.item,
      {
        backgroundColor: isSelected ? Colors.blueDark : Colors.grayWhite
      }
    ];
    return (
      <TouchableOpacity
        key={item.key}
        style={itemStyle}
        activeOpacity={0.5}
        onPress={this.createOnItemPressHandler(item)}
      >
        <MuxText size={textSize} color={isSelected ? Colors.grayWhite : Colors.blue} numberOfLines={1}>
          {item.value === "" ? " " : item.value}
        </MuxText>
      </TouchableOpacity>
    );
  };

  render() {
    const { label, thickness, selected, isDataLoading, onEndReached, componentId } = this.props;

    return (
      <View style={stylesheet.container}>
        {label && (
          <View style={stylesheet.labelWrapper}>
            <MuxText align="center">{label.toUpperCase()}</MuxText>
          </View>
        )}
        <View style={stylesheet.inputWrapper}>
          <Input
            // TODO: thicknes DNE. where was this used?
            // thickness={thickness}
            value={this.state.searchValue}
            onChangeText={this.onSearchInputChange}
            placeholder="Search"
            icon="search"
          />
        </View>
        {this.filteredItems.length || isDataLoading ? (
          <EndlessScrollList
            style={stylesheet.endlessScrollList}
            data={this.filteredItems}
            renderItem={this.renderListItem}
            keyExtractor={this.keyExtractor}
            extraData={selected}
            isDataLoading={isDataLoading}
            onEndReached={onEndReached}
          />
        ) : (
          <Placeholder label="No records found." />
        )}
      </View>
    );
  }
}
interface IStyles {
  container: ViewStyle;
  labelWrapper: ViewStyle;
  inputWrapper: ViewStyle;
  item: ViewStyle;
  endlessScrollList: ViewStyle;
}
const textSize = scale(20);
const stylesheet: IStyles = {
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: Colors.grayIron
  },
  labelWrapper: {
    backgroundColor: Colors.grayWhite,
    paddingTop: scale(25),
    paddingBottom: scale(22),
    paddingHorizontal: scale(20)
  },
  inputWrapper: {
    backgroundColor: Colors.white,
    marginVertical: scale(10),
    marginHorizontal: scale(20)
  },
  item: {
    paddingVertical: scale(22),
    paddingHorizontal: scale(19),
    marginBottom: scale(10)
  },
  endlessScrollList: {
    flex: 1
  }
};

export { SearchPicker, ISearchPickerProps };
