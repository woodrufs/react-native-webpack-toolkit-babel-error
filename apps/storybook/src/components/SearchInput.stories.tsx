import * as React from "react";
import { TextStyle } from "react-native";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { SearchInput, helpers } from "@strmbrkr/components";
import { IBadgeButtonProps } from "@strmbrkr/components/lib/Button";

import { CenterView } from "../decorators";

const { scale } = helpers;

const styles: { searchInput: TextStyle } = {
  searchInput: { marginHorizontal: scale(20) }
};

const searchInputProps = { onFocusEnd: action("focus-ended"), onChangeText: action("text-changed") };
const leftButton: IBadgeButtonProps = {
  badgeTitle: "left button",
  icon: "avengers",
  onPress: action("left-button-click")
};
const rightButton: IBadgeButtonProps = {
  icon: "filter",
  badgeTitle: "!",
  badgePosition: "bottomLeft",
  onPress: action("right-button-click")
};

storiesOf("SearchInput", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("SearchInput without buttons", () => <SearchInput {...searchInputProps} inputStyle={styles.searchInput} />)
  .add("SearchInput with both buttons", () => (
    <SearchInput
      {...searchInputProps}
      leftButton={leftButton}
      rightButton={rightButton}
      inputStyle={styles.searchInput}
    />
  ))
  .add("SearchInput with button to the left", () => (
    <SearchInput {...searchInputProps} leftButton={leftButton} inputStyle={styles.searchInput} />
  ))
  .add("SearchInput with button to the right", () => (
    <SearchInput {...searchInputProps} rightButton={rightButton} inputStyle={styles.searchInput} />
  ));
