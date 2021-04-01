export interface IDataItem {
  title: string;
  icon: string;
  items?: IDataItem[];
}
export interface IDataItemObj {
  item: IDataItem;
}
export interface ISubmenuProps {
  data: IDataItem[];
  onPress: (item: IDataItem) => void;
}

export interface ISubmenuItemProps extends IDataItem {
  onItemPress: (item: IDataItem) => void;
}
