import * as React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import { Submenu } from "@strmbrkr/components";
import { CenterView } from "../decorators";

interface IData {
  title: string;
  icon: string;
}
const onPressAction = (item: IData) => {
  action(`On SubmenuItem press (${item.title})`)();
};

storiesOf("Submenu", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Submenu (4 items)", () => <Submenu data={smallMenu} onPress={onPressAction} />)
  .add("Submenu (13 items)", () => <Submenu data={bigMenu} onPress={onPressAction} />);

const smallMenu: IData[] = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "mixed"
  },
  {
    title: "Pellentesque habitant",
    icon: "mixed"
  },
  {
    title: "Etiam vitae arcu egestas",
    icon: "container"
  },
  {
    title: "Sed sed aliquam felis",
    icon: "container"
  }
];

const bigMenu: IData[] = [
  { title: "1", icon: "mixed" },
  { title: "2", icon: "mixed" },
  { title: "3", icon: "mixed" },
  { title: "4", icon: "mixed" },
  { title: "5", icon: "mixed" },
  { title: "6", icon: "container" },
  { title: "7", icon: "container" },
  { title: "8", icon: "container" },
  { title: "9", icon: "container" },
  { title: "10", icon: "container" },
  { title: "11", icon: "container" },
  { title: "12", icon: "container" },
  { title: "13", icon: "container" }
];
