import * as React from "react";
import { createIconSetFromFontello } from "react-native-vector-icons";
import { IconProps } from "react-native-vector-icons/Icon";

const muxIconsConfig = require("./mux-icons.json");

const IconComponent = createIconSetFromFontello(muxIconsConfig);

const Icon: React.FC<IconProps> = ({ ...props }: IconProps) => {
  return <IconComponent {...props} />;
};

export { IconProps, Icon };
