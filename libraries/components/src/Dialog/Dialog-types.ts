import { IDialogButtonProps } from "./components";

interface IDialogProps {
  visible?: boolean;
  hasCloseButton?: boolean;
  hasTopSeparator?: boolean;
  hasBottomSeparator?: boolean;
  title: string;
  titleIcon?: string;
  actionButtons?: React.ReactElement<IDialogButtonProps>[];
  onOutsidePressClose?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

export { IDialogProps };
