type SearchPickerSelection = string[] | string;

interface ISearchPickerItem {
  key: string;
  value: string;
}

interface ISearchPickerProps {
  componentId?: string;
  isDataLoading?: boolean;
  isMultiselect?: boolean;
  isValueRequired?: boolean;
  items: Array<ISearchPickerItem>;
  label?: string;
  // TODO: make these props required as all pickers
  // use the onApplyPickerSelection and onItemSelected props
  onApplyPickerSelection?: () => void;
  onItemSelected?: (item: SearchPickerSelection | undefined) => void;
  onSearchInputChange?: (value: string) => void;
  // this is needed to not make breaking changes
  // TODO: remove this as soon as all pickers
  // use the onApplyPickerSelection and onItemSelected props
  onItemPress: (item: ISearchPickerItem) => void;
  thickness?: string;
  searchValue: string;
  selected: string | Array<string> | undefined;
  onEndReached?: () => void;
}

export { ISearchPickerProps, ISearchPickerItem, SearchPickerSelection };
