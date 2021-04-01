import * as React from "react";

import { View, StyleSheet } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, radios, text } from "@storybook/addon-knobs";
import {
  Button,
  BadgeButton,
  CustomButton,
  DialogContentButton,
  ContactsDialogButton,
  MuxText,
  helpers,
  styles
} from "@strmbrkr/components";
import { ButtonWrapper } from "../decorators";

const { scale } = helpers;
const { Colors } = styles;

const dialogContentWrapperStyles = StyleSheet.create({
  fullWidth: {
    width: "100%"
  }
});

const buttonStyles = StyleSheet.create({
  button: {
    width: scale(200)
  },
  dialogContentFirstButton: {
    marginBottom: scale(10)
  }
});

const customContentStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

const customBadgeButtonStyles = StyleSheet.create({
  container: { width: "60%" },
  button: { width: "100%" },
  // NOTE: use round values for borders to avoid iOS UI defects.
  badge: { borderRadius: Math.round(scale(5)) }
});

storiesOf("Button", module)
  .addDecorator((getStory) => <ButtonWrapper>{getStory()}</ButtonWrapper>)
  .add("Button with Text and Icon", () => (
    <Button
      disabled={boolean("Disabled", false)}
      title={text("Title", "Press Me!")}
      icon={radios(
        "Icon",
        { Check: "check", Containers: "containers", Finalize: "finalize", Search: "search" },
        "check"
      )}
      onPress={action("clicked-button")}
      size={radios("Size", { Small: "small", Medium: "medium", Large: "large" }, "large")}
    />
  ))
  .add("Small Button with Icon only", () => <Button icon="arrow" size="small" onPress={action("clicked-with-icon")} />)
  .add("Medium Inactive Button with Text only", () => (
    <Button title="Press me!" disabled size="medium" onPress={action("clicked-button-with-text")} />
  ))
  .add("Button with custom styles", () => (
    <Button
      title="Custom style width and underlay!"
      underlayColor={Colors.green}
      style={buttonStyles.button}
      onPress={action("clicked-button-with-text")}
    />
  ))
  .add("Button with custom text color", () => (
    <Button
      title="Press me!"
      titleColor={Colors.red}
      icon="check"
      iconColor={Colors.grayDark}
      onPress={action("clicked-button")}
    />
  ))
  .add("Custom Button", () => (
    <CustomButton onPress={action("clicked-button")}>
      <View style={customContentStyles.container}>
        <MuxText color={Colors.green}>First line</MuxText>
        <MuxText color={Colors.amber}>Second line</MuxText>
      </View>
    </CustomButton>
  ))
  .add("Dialog Content Button", () => (
    <View style={dialogContentWrapperStyles.fullWidth}>
      <DialogContentButton
        title="Dialog Button"
        style={buttonStyles.dialogContentFirstButton}
        onPress={action("clicked-button")}
      />
      <DialogContentButton title="Disabled Dialog Button" disabled onPress={action("clicked-button")} />
    </View>
  ))
  .add("Contacts Dialog Button", () => (
    <ContactsDialogButton title="CONTACTS" description="BUTTON" onPress={action("clicked-button")} />
  ))
  .add("Button with default badge", () => (
    <BadgeButton icon="check" badgeTitle="1" style={{ width: scale(50) }} onPress={action("clicked-button")} />
  ))
  .add("Button with custom badge", () => (
    <BadgeButton
      icon="check"
      badgeTitle="!"
      badgeBackgroundColor={Colors.red}
      badgePosition="bottomRight"
      style={customBadgeButtonStyles.button}
      containerStyle={customBadgeButtonStyles.container}
      badgeStyle={customBadgeButtonStyles.badge}
      onPress={action("clicked-button")}
    />
  ))
  .addDecorator(withKnobs);
