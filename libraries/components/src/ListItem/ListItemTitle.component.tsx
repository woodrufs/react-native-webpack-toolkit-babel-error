import * as React from "react";
import { scale } from "../helpers";
import { MuxText, IMuxTextProps } from "../MuxText";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IListItemTitleProps extends IMuxTextProps {}

const ListItemTitle: React.FC<IListItemTitleProps> = ({ ...props }: IListItemTitleProps) => {
  return <MuxText size={scale(20)} bold {...props} />;
};

export { ListItemTitle, IListItemTitleProps };
