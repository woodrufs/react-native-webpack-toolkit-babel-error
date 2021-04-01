import * as React from "react";
import { SearchInput } from "../SearchInput";
import { IBadgeButtonProps } from "../Button";
import { defaultIndent, defaultMarginTop } from "../styles";
import { ViewStyle } from "react-native";

interface ISearchWithFilterProps {
  searchText: string;
  filtersCount: number;
  onSearchValueChange: (value: string) => void;
  onFilterButtonPress: () => void;
}

const SearchWithFilter: React.FC<ISearchWithFilterProps> = ({
  searchText,
  filtersCount,
  onFilterButtonPress,
  onSearchValueChange
}: ISearchWithFilterProps) => {
  const filterButton: IBadgeButtonProps = {
    icon: "filter",
    // TODO: confirm replacing null with empty string is ok. IBadgeButtonProps doesnt allow bull for badgeTitle
    badgeTitle: filtersCount > 0 ? `${filtersCount.toString()}` : "",
    badgePosition: "bottomRight",
    onPress: onFilterButtonPress
  };

  return (
    <SearchInput
      // TODO: Where is thickness coming from??
      // thickness="normal"
      containerStyle={stylesheet.container}
      rightButton={filterButton}
      value={searchText}
      onChangeText={onSearchValueChange}
    />
  );
};

interface IStyles {
  container: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    paddingVertical: defaultMarginTop,
    paddingHorizontal: defaultIndent
  }
};
export { SearchWithFilter, ISearchWithFilterProps };
