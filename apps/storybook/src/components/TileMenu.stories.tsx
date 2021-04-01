import * as React from "react";
import { storiesOf } from "@storybook/react-native";

import { action } from "@storybook/addon-actions";
import { TileMenu, TileMenuItem } from "@strmbrkr/components";

import { CenterView } from "../decorators/CenterView";

const generateTileMenuItems = (numItems: number) => {
  const items = [];
  const getItem = (title: number) => (
    <TileMenuItem
      key={title}
      icon="arrow"
      title={`${title}`}
      circleColor="#8fbe00"
      onPress={action(`clicked-menu-item (${title})`)}
    />
  );

  for (let i = 0; i < numItems; i += 1) {
    items.push(getItem(i + 1));
  }

  return items;
};

storiesOf("TileMenu", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Tile Menu test (13 items)", () => <TileMenu>{generateTileMenuItems(13)}</TileMenu>)
  .add("Tile Menu test (2 items)", () => <TileMenu>{generateTileMenuItems(2)}</TileMenu>);
