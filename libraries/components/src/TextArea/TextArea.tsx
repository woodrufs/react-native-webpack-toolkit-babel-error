import * as React from "react";
import { TextStyle, ViewStyle } from "react-native";
import { Input, IInputProps } from "../Input";
import { Colors, defaultTextIndent, fontSize } from "../styles";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ITextAreaProps extends IInputProps {}

const TextArea: React.FC<ITextAreaProps> = ({ containerStyle, maxLength, inputStyle, ...props }: ITextAreaProps) => {
  return (
    <Input
      multiline
      maxLength={maxLength ?? 500}
      containerStyle={[stylesheet.container, containerStyle] as ViewStyle}
      inputStyle={[stylesheet.input, inputStyle] as TextStyle}
      //TODO: What is this scroll enabled property? Doesnt exist on Input
      // scrollEnabled={false}
      {...props}
    />
  );
};

interface IStyles {
  container: ViewStyle;
  input: TextStyle;
}
const stylesheet: IStyles = {
  container: {
    height: "auto",
    paddingVertical: defaultTextIndent,
    paddingHorizontal: defaultTextIndent / 2,
    borderWidth: 1,
    borderColor: Colors.grayAlto
  },
  input: {
    textAlignVertical: "top",
    paddingTop: 0,
    paddingBottom: 0,
    fontSize
  }
};
export { TextArea, ITextAreaProps };
