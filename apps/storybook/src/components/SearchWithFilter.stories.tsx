import * as React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { SearchWithFilter } from "@strmbrkr/components";
import { CenterView } from "../decorators";

storiesOf("SearchWithFilter", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default SearchWithFilter", () => (
    <SearchWithFilter
      searchText="Search me"
      filtersCount={3}
      onFilterButtonPress={action("button-pressed")}
      onSearchValueChange={action("text-changed")}
    />
  ));
