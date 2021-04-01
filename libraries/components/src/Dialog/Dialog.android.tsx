import * as React from "react";
import { View, ScrollView } from "react-native";
import { Overlay } from "../Overlay";
import { DialogButtons, DialogCloseIconButton, DialogContent, DialogTitle } from "./components";
import { IDialogProps } from "./Dialog-types";
import { Modal } from "../Modal";
import { stylesheet } from "./Dialog-styles";

const Dialog: React.FC<IDialogProps> = ({
  visible = true,
  hasCloseButton = false,
  hasTopSeparator = true,
  hasBottomSeparator = false,
  title,
  titleIcon,
  actionButtons = undefined,
  onOutsidePressClose = false,
  children,
  onClose = () => undefined
}: IDialogProps) => {
  return (
    <Modal
      animationType="fade"
      supportedOrientations={["portrait", "landscape"]}
      transparent
      visible={!!visible}
      onRequestClose={onClose}
    >
      <ScrollView
        scrollEnabled={false}
        alwaysBounceVertical={false}
        style={stylesheet.container}
        contentContainerStyle={stylesheet.contentContainer}
      >
        <Overlay visible onPress={onOutsidePressClose ? onClose : undefined} />
        <View style={stylesheet.modal}>
          {hasCloseButton && <DialogCloseIconButton onPress={onClose} />}
          <DialogTitle title={title} titleIcon={titleIcon} />
          <DialogContent hasTopSeparator={hasTopSeparator} hasBottomSeparator={hasBottomSeparator}>
            {children}
          </DialogContent>
          <DialogButtons>{actionButtons}</DialogButtons>
        </View>
      </ScrollView>
    </Modal>
  );
};

export { Dialog };
