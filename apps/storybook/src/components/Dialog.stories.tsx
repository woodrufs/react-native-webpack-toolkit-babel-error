/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/array-type */
import * as React from "react";
import { View, ViewStyle } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { Dialog, Button, styles, IButtonProps } from "@strmbrkr/components";

import { CenterView } from "../decorators";

const { Colors } = styles;

interface IStyles {
  dialogStyles: ViewStyle;
  dialogContentButton: ViewStyle;
  dialogActionButton: ViewStyle;
}
const stylesheet: IStyles = {
  dialogStyles: {
    width: "100%",
    height: "100%"
  },
  dialogContentButton: {
    backgroundColor: Colors.green,
    marginTop: 15
  },
  dialogActionButton: {
    marginBottom: 5
  }
};

interface IShowModalPropsType {
  openDialogButtonTitle: string;
  dialogTitle: string;
  dialogTitleIcon?: string;
  dialogButtons: Array<any>;
  dialogContent?: any;
  hasTopSeparator?: boolean;
  hasBottomSeparator?: boolean;
}

const ShowModelComponent: React.FC<IShowModalPropsType> = (props: IShowModalPropsType) => {
  const {
    openDialogButtonTitle,
    dialogTitle,
    dialogTitleIcon,
    dialogButtons,
    dialogContent,
    hasTopSeparator,
    hasBottomSeparator
  } = props;
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const showDialog = () => {
    action("Open Dialog")();
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    action("Close Dialog")();
    setIsDialogOpen(false);
  };

  const dialogActionButtons = dialogButtons.map((button) => {
    if (!React.isValidElement<IButtonProps>(button)) {
      return button;
    }
    return React.cloneElement(button, { onPress: closeDialog });
  });

  return (
    <View style={stylesheet.dialogStyles}>
      <CenterView>
        <Button title={openDialogButtonTitle} onPress={showDialog} />
        <Dialog
          visible={isDialogOpen}
          hasCloseButton
          hasTopSeparator={hasTopSeparator}
          hasBottomSeparator={hasBottomSeparator}
          title={dialogTitle}
          titleIcon={dialogTitleIcon}
          actionButtons={dialogActionButtons}
          onOutsidePressClose
          onClose={closeDialog}
        >
          {dialogContent}
        </Dialog>
      </CenterView>
    </View>
  );
};

const dialogButtons = [
  <Button key={1} style={stylesheet.dialogActionButton} title="Cancel" icon="x" size="medium" />,
  <Button key={2} style={stylesheet.dialogActionButton} title="OK" size="medium" />,
  <Button key={3} style={stylesheet.dialogActionButton} title="Close" size="medium" />
];

const dialogContentButton = <Button style={stylesheet.dialogContentButton} title="Dialog Content" />;

const dialogContentButtons = [
  <Button key={0} style={stylesheet.dialogContentButton} title="Dialog Content" />,
  <Button key={1} style={stylesheet.dialogContentButton} title="Dialog Content" />,
  <Button key={2} style={stylesheet.dialogContentButton} title="Dialog Content" />,
  <Button key={3} style={stylesheet.dialogContentButton} title="Dialog Content" />,
  <Button key={4} style={stylesheet.dialogContentButton} title="Dialog Content" />,
  <Button key={5} style={stylesheet.dialogContentButton} title="Dialog Content" />,
  <Button key={6} style={stylesheet.dialogContentButton} title="Dialog Content" />,
  <Button key={7} style={stylesheet.dialogContentButton} title="Dialog Content" />,
  <Button key={8} style={stylesheet.dialogContentButton} title="Dialog Content" />,
  <Button key={9} style={stylesheet.dialogContentButton} title="Dialog Content" />
];

storiesOf("Dialog", module)
  .addDecorator((getStory) => getStory())
  .add("Empty Dialog", () => (
    <ShowModelComponent
      openDialogButtonTitle="Open Empty Dialog"
      dialogTitle="Empty Dialog"
      dialogButtons={dialogButtons.slice(0, 2)}
    />
  ))
  .add("Dialog with content", () => (
    <ShowModelComponent
      openDialogButtonTitle="Open Dialog with Content"
      dialogTitle="Dialog with content"
      dialogButtons={dialogButtons.slice(0, 2)}
      dialogContent={dialogContentButton}
    />
  ))
  .add("Dialog with 3 buttons", () => (
    <ShowModelComponent
      openDialogButtonTitle="Open Dialog with 3 Buttons"
      dialogTitle="Dialog with 3 buttons"
      dialogButtons={dialogButtons}
      dialogContent={dialogContentButton}
    />
  ))
  .add("Dialog with long content", () => (
    <ShowModelComponent
      openDialogButtonTitle="Open Dialog with long content"
      dialogTitle="Dialog with long content"
      dialogButtons={[dialogButtons[0]]}
      dialogContent={dialogContentButtons}
    />
  ))
  .add("Dialog with icon in title", () => (
    <ShowModelComponent
      openDialogButtonTitle="Open Dialog with long content"
      dialogTitle="Dialog with icon in title"
      dialogTitleIcon="phone"
      dialogButtons={dialogButtons.slice(0, 2)}
      dialogContent={dialogContentButton}
    />
  ))
  .add("Dialog with bottom separator", () => (
    <ShowModelComponent
      openDialogButtonTitle="Open Dialog with bottom separator"
      dialogTitle="Dialog with bottom separator"
      dialogTitleIcon="check"
      dialogButtons={dialogButtons.slice(0, 2)}
      dialogContent={dialogContentButton}
      hasTopSeparator={false}
      hasBottomSeparator
    />
  ));
