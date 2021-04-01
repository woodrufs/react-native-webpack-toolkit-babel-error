import React from "react";
import { storiesOf } from "@storybook/react-native";

import { MuxText, BalanceStatus, BalanceSummary, Panel, styles } from "@strmbrkr/components";

import { CenterView } from "../decorators/CenterView";

const { Colors } = styles;
storiesOf("Balance", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Positive, negative, and fulfilled balance statuses", () => (
    <>
      <MuxText>Negative balance</MuxText>
      <BalanceStatus balance={-319} />
      <MuxText>Zero balance</MuxText>
      <BalanceStatus balance={0} />
      <MuxText>Positive balance</MuxText>
      <BalanceStatus balance={+216} />
    </>
  ))
  .add("Balance Status with custom color", () => (
    <BalanceStatus balance={-319} negativeBalanceColor={Colors.grayDark} />
  ))
  .add("Default Balance Summary", () => (
    <Panel>
      <BalanceSummary requiredValue={200} actualValue={83} />
    </Panel>
  ))
  // TODO: what is the point of this test? Why is balance allowed to be 3?
  .add("Balance Summary with custom balance", () => (
    <Panel>
      <BalanceSummary balance={3} requiredValue={200} actualValue={83} positiveBalanceColor={Colors.grayDark} />
    </Panel>
  ))
  .add("Balance Summary with units", () => (
    <Panel>
      <BalanceSummary requiredValue={200} actualValue={83} units="ea" />
    </Panel>
  ));
