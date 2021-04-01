import * as React from "react";
import { View, StyleSheet } from "react-native";

import { storiesOf } from "@storybook/react-native";

import { SearchPicker, SearchPickerSelection } from "@strmbrkr/components";

import { CenterView } from "../decorators";

type SearchPickerWrapperProps = {
  isMultiselect: boolean;
  label: string;
  isLoadingMoreEnabled?: boolean;
  isObsoleteOnItemPress?: boolean;
};

type SearchPickerWrapperState = {
  items: Array<{ key: string; value: string }>;
  searchValue: string;
  // TODO, will be obsolete as soon as onItemPress picker prop is not used
  selectedItemKey: string;
  selectedItemsKeys: string[];
  pickerSelection: SearchPickerSelection | undefined;
  isLoading: boolean;
  page: number;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch"
  }
});

const dataRowsLimit = 200;
const pageSize = 20;
interface IData {
  value: string;
  key: string;
}
const getData = (pageNumber = 1): IData[] => {
  const dataLength = (pageNumber - 1) * pageSize;
  return Array.from(new Array(pageSize), (x, i) => ({
    value: `Item ${dataLength + i}`,
    key: (dataLength + i).toString()
  }));
};

class SearchPickerWrapper extends React.Component<SearchPickerWrapperProps, SearchPickerWrapperState> {
  static defaultProps = {
    isMultiselect: false
  };

  state = {
    items: [{ value: "", key: "empty" }, ...getData()],
    searchValue: "",
    selectedItemKey: "",
    selectedItemsKeys: new Array<string>(),
    pickerSelection: undefined,
    isLoading: false,
    page: 1
  };

  onEndReached() {
    const { searchValue, isLoading } = this.state;
    const { isLoadingMoreEnabled } = this.props;
    if (searchValue !== "" || isLoading || !isLoadingMoreEnabled) {
      return;
    }

    this.setState({ isLoading: true });

    setTimeout(() => {
      const { items, page } = this.state;

      let loadedData: IData[] = [];
      const isRowsLimitReached = page * pageSize >= dataRowsLimit;
      if (!isRowsLimitReached) {
        loadedData = getData(page + 1);
      }

      this.setState({
        isLoading: false,
        page: isRowsLimitReached ? page : page + 1,
        items: isRowsLimitReached ? items : [...items, ...loadedData]
      });
    }, 3000);
  }

  onItemPress({ key }: IData) {
    const { selectedItemsKeys } = this.state;
    const { isMultiselect } = this.props;

    if (isMultiselect) {
      const newState = selectedItemsKeys.includes(key)
        ? {
            selectedItemsKeys: [...selectedItemsKeys.filter((item) => item !== key)],
            searchValue: "",
            selectedItemKey: ""
          }
        : {
            selectedItemsKeys: [...selectedItemsKeys, key],
            searchValue: "",
            selectedItemKey: ""
          };
      this.setState(newState);
    } else {
      this.setState({ selectedItemKey: key, searchValue: "" });
    }
  }

  onItemSelected(selection: SearchPickerSelection | undefined) {
    this.setState({ pickerSelection: selection ?? undefined });
  }

  onSearchInputChange(searchValue: string) {
    this.setState({ searchValue });
  }

  onItemPressEmpty = () => {};

  onApplyPickerSelection = () => {
    /* usually, navigate back from picker screen here */
  };

  render() {
    const { isMultiselect, label, isObsoleteOnItemPress } = this.props;
    const { searchValue, selectedItemKey, selectedItemsKeys, isLoading, items, pickerSelection } = this.state;

    let selected;
    if (isObsoleteOnItemPress) {
      selected = pickerSelection;
    } else {
      selected = isMultiselect ? selectedItemsKeys : selectedItemKey;
    }

    const props = isObsoleteOnItemPress
      ? {
          onItemSelected: this.onItemSelected.bind(this),
          onApplyPickerSelection: this.onApplyPickerSelection
        }
      : {};

    return (
      <View style={styles.container}>
        <SearchPicker
          isMultiselect={isMultiselect}
          items={items}
          label={label}
          onSearchInputChange={this.onSearchInputChange.bind(this)}
          onItemPress={isObsoleteOnItemPress ? this.onItemPressEmpty : this.onItemPress.bind(this)}
          searchValue={searchValue}
          selected={selected ?? undefined}
          isDataLoading={isLoading}
          onEndReached={this.onEndReached.bind(this)}
          {...props}
        />
      </View>
    );
  }
}

storiesOf("SearchPicker", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("SearchPicker example", () => <SearchPickerWrapper label="Filter: status" />)
  .add("SearchPicker multiple choise example", () => <SearchPickerWrapper label="Filter: status" isMultiselect />)
  .add("SearchPicker load more items when end is reached", () => (
    <SearchPickerWrapper label="Picker" isLoadingMoreEnabled />
  ))
  .add("SearchPicker multiple choise example (without obsolete onItemPress prop)", () => (
    <SearchPickerWrapper label="Filter: status" isMultiselect isObsoleteOnItemPress />
  ))
  .add("SearchPicker load more items when end is reached (without obsolete onItemPress prop)", () => (
    <SearchPickerWrapper label="Picker" isLoadingMoreEnabled isObsoleteOnItemPress />
  ));
