import * as React from "react";
import { storiesOf } from "@storybook/react-native";

import { MainMenu, MenuItem } from "@strmbrkr/components";

storiesOf("MainMenu", module)
  // .addDecorator((fn) => <CenterView>{fn()}</CenterView>)
  .add("Customer Shipping", () => (
    <MainMenu>
      <MenuItem title="Customer Shipping" icon="shipping" onPress={() => {}} />
      <MenuItem title="Customer Shipping" icon="shipping" onPress={() => {}} />
      <MenuItem title="Customer Shipping" icon="shipping" onPress={() => {}} />
      <MenuItem title="Customer Shipping" icon="shipping" onPress={() => {}} />
      <MenuItem title="Customer Shipping" icon="shipping" onPress={() => {}} />
      <MenuItem title="Customer Shipping" icon="shipping" onPress={() => {}} />
    </MainMenu>
  ));
