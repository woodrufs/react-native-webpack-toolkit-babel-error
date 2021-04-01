import { KeyboardType } from "react-native";
import { INPUT_TYPE, InputType, FormatInputRule } from "./Input-types";
export const getInputKeyboardType = (inputType?: InputType): KeyboardType => {
  switch (inputType) {
    case INPUT_TYPE.Float:
    case INPUT_TYPE.UnsignedFloat:
    case INPUT_TYPE.Integer:
    case INPUT_TYPE.UnsignedInteger:
      return "numeric";

    default:
      return "default";
  }
};
export const handleInputText = (text?: string, formatRule?: FormatInputRule): string => {
  if (!text) {
    return "";
  }

  if (!formatRule) {
    return text;
  }

  let value = text;

  if (formatRule.isTrimValue) {
    value = value.trim();
  }

  if (formatRule.replacePattern) {
    value = value.replace(formatRule.replacePattern, "");
  }

  if (formatRule.matchPattern) {
    const matchedValues = formatRule.matchPattern.exec(value);
    value = matchedValues ? matchedValues[0] : "";
  }

  return value;
};
