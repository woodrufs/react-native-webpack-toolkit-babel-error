import * as React from "react";
import { ThreeSectionPanel } from "../ThreeSectionPanel";
import { ScanInput, IScanInputProps } from "../ScanInput";

interface IScanInputPanelProps extends IScanInputProps {
  leftLabelValue?: string;
  rightLabelValue?: string;
  onIconPress?: () => void;
}

const ScanInputPanel: React.FC<IScanInputPanelProps> = ({
  leftLabelValue,
  rightLabelValue,
  inputValue,
  onIconPress,
  ...scanInputProps
}: IScanInputPanelProps) => {
  return (
    <ThreeSectionPanel
      noMarginTop
      header={
        <ScanInput
          {...scanInputProps}
          onPanelIconPress={onIconPress}
          inputValue={inputValue}
          disableBorders
          smallInputIcon
        />
      }
      firstLabel=""
      firstValue={leftLabelValue || ""}
      secondLabel=""
      secondValue={rightLabelValue || ""}
    />
  );
};

export { ScanInputPanel, IScanInputPanelProps };
