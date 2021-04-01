import * as React from "react";
import { scale } from "../helpers";
import { MuxText, IMuxTextProps } from "../MuxText";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IListItemSubtitleProps extends IMuxTextProps {}

const ListItemSubtitle: React.FC<IListItemSubtitleProps> = ({ ...props }: IListItemSubtitleProps) => {
  return <MuxText size={scale(16)} {...props} />;
};

export { ListItemSubtitle, IListItemSubtitleProps };
