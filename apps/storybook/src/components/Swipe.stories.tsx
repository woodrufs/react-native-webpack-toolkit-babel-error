import * as React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import { Swipe, Button } from "@strmbrkr/components";

import { CenterView } from "../decorators";

storiesOf("Swipe", module)
  .add("Swipe screens", () => (
    <Swipe>
      <CenterView>
        <Button title="Press me!" icon="check" onPress={action("clicked-button")} />
      </CenterView>
      <CenterView>
        <Button title="Don't press me!" icon="arrow" onPress={action("clicked-button")} />
      </CenterView>
    </Swipe>
  ))
  .add("Swipe from second screen", () => (
    <Swipe index={1}>
      <CenterView>
        <Button title="Press me!" icon="check" onPress={action("clicked-button")} />
      </CenterView>
      <CenterView>
        <Button title="Don't press me!" icon="arrow" onPress={action("clicked-button")} />
      </CenterView>
    </Swipe>
  ))
  .add("Single screen", () => (
    <Swipe>
      <CenterView>
        <Button title="Don't press me!" icon="arrow" onPress={action("clicked-button")} />
      </CenterView>
    </Swipe>
  ))
  .add("Swipe screens with onSwipeEnd action", () => (
    <Swipe onSwipeEnd={action("You did swipe!")}>
      <CenterView>
        <Button title="Press me!" icon="check" onPress={action("clicked-button")} />
      </CenterView>
      <CenterView>
        <Button title="Don't press me!" icon="arrow" onPress={action("clicked-button")} />
      </CenterView>
    </Swipe>
  ));
