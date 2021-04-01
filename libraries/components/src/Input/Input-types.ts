import { $Values } from "utility-types";
type InputTypes = {
  readonly Text: "Text";
  readonly Integer: "Integer";
  readonly UnsignedInteger: "UnsignedInteger";
  readonly Float: "Float";
  readonly UnsignedFloat: "UnsignedFloat";
};
export const INPUT_TYPE: InputTypes = {
  Text: "Text",
  Integer: "Integer",
  UnsignedInteger: "UnsignedInteger",
  Float: "Float",
  UnsignedFloat: "UnsignedFloat"
};
export type InputType = $Values<typeof INPUT_TYPE>;
type KeyboardTypes = {
  readonly Default: "default";
  readonly Numeric: "numeric";
};
export const KEYBOARD_TYPE: KeyboardTypes = {
  Default: "default",
  Numeric: "numeric"
};
export type KeyboardType = $Values<typeof KEYBOARD_TYPE>;
export type KeyboardKeys = KeyboardType[keyof KeyboardType];
export type FormatInputRule = {
  replacePattern?: RegExp;
  matchPattern?: RegExp;
  isTrimValue?: boolean;
};
const decimalSeparator = ".";
export const FORMAT_INPUT_RULES: Map<InputType, FormatInputRule> = new Map([
  [
    INPUT_TYPE.Integer,
    {
      replacePattern: new RegExp("[^-?\\d*]", "g"),
      matchPattern: new RegExp("(-?\\d*)", "g"),
      isTrimValue: true
    }
  ],
  [
    INPUT_TYPE.UnsignedInteger,
    {
      replacePattern: new RegExp("[^\\d]", "g"),
      matchPattern: new RegExp("\\d*", "g"),
      isTrimValue: true
    }
  ],
  [
    INPUT_TYPE.Float,
    {
      replacePattern: new RegExp(`[^-\\d${decimalSeparator}]`, "g"),
      matchPattern: new RegExp(`-?\\d*(${decimalSeparator}\\d*)?`, "g"),
      isTrimValue: true
    }
  ],
  [
    INPUT_TYPE.UnsignedFloat,
    {
      replacePattern: new RegExp(`[^\\d${decimalSeparator}]`, "g"),
      matchPattern: new RegExp(`\\d*(${decimalSeparator}\\d*)?`, "g"),
      isTrimValue: true
    }
  ]
]);
