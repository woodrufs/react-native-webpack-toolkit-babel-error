import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { TileMenuItem } from "@strmbrkr/components";

import { CenterView } from "../decorators/CenterView";

storiesOf("TileMenuItem", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("TileMenuItem with short title", () => (
    <TileMenuItem icon="arrow" title="Lorem ipsum" circleColor="#f5a623" onPress={action("clicked-menu-item")} />
  ))
  .add("TileMenuItem with long title", () => (
    <TileMenuItem
      icon="x"
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      circleColor="#d0021b"
      onPress={action("clicked-menu-item")}
    />
  ))
  .add("TileMenuItem with backgroundColor, fontColor, noBorders", () => (
    <TileMenuItem
      icon="x"
      title="Lorem ipsum dolor sit"
      circleColor="transparent"
      backgroundColor="#0096d5"
      fontColor="white"
      noBorders
      onPress={action("clicked-menu-item")}
    />
  ));
