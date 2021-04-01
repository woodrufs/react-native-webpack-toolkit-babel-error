import * as React from "react";
import { storiesOf } from "@storybook/react-native";

import { Badge, helpers, styles } from "@strmbrkr/components";

import { CenterView } from "../decorators/CenterView";

const { Colors } = styles;
const { scale } = helpers;

storiesOf("Badge", module)
  .addDecorator((fn) => <CenterView>{fn()}</CenterView>)
  .add("Default Badge", () => <Badge title="1" />)
  .add("Badge with long text", () => <Badge title="123" />)
  .add("Badge with big text", () => <Badge title="1" titleSize={scale(36)} />)
  .add("Badge with big and long text", () => <Badge title="1111" titleSize={scale(36)} />)
  .add("Badge with small text", () => <Badge title="1" titleSize={scale(6)} />)
  .add("Badge with custom styles", () => (
    <Badge
      title="1"
      titleSize={scale(46)}
      backgroundColor={Colors.black}
      titleColor={Colors.blue}
      // NOTE: use round values for borders to avoid iOS UI defects.
      style={{ borderRadius: Math.round(scale(10)) }}
    />
  ));
