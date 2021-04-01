import * as React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { NavBar } from "@strmbrkr/components";

storiesOf("NavBar", module)
  .add("Default NavBar", () => (
    <NavBar
      onBackButtonPress={action("On Back Button press")}
      title="Navigation Bar Title"
      onMenuButtonPress={action("On Menu Button press")}
    />
  ))
  .add("NavBar with both icons", () => (
    <NavBar
      onBackButtonPress={action("On Back Button press")}
      title="Navigation Bar Title"
      titleIcon="home"
      modeIcon="checklist"
      onMenuButtonPress={action("On Menu Button press")}
    />
  ))
  .add("NavBar with title icon", () => (
    <NavBar
      onBackButtonPress={action("On Back Button press")}
      title="Navigation Bar Title"
      titleIcon="home"
      onMenuButtonPress={action("On Menu Button press")}
    />
  ))
  .add("NavBar with mode icon", () => (
    <NavBar
      onBackButtonPress={action("On Back Button press")}
      title="Navigation Bar Title"
      modeIcon="checklist"
      onMenuButtonPress={action("On Menu Button press")}
    />
  ))
  .add("NavBar with hidden Back and Menu Buttons", () => (
    <NavBar
      backButtonHidden
      menuButtonHidden
      title="Navigation Bar Title"
      modeIcon="checklist"
      onMenuButtonPress={action("On Menu Button press")}
    />
  ));
