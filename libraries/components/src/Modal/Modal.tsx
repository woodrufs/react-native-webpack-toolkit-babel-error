import * as React from "react";
import { Modal, ModalProps } from "react-native";
import { IModalProps } from ".";

interface IMuxModalProps extends ModalProps {
  visible: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

const MuxModal: React.FC<IModalProps> = ({
  visible,
  children,
  onClose = () => undefined,
  ...props
}: IMuxModalProps) => {
  return (
    <Modal visible={visible} {...props}>
      {children}
    </Modal>
  );
};

export { MuxModal, IMuxModalProps };
