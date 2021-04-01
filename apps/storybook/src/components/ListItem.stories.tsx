import * as React from "react";
import { FlatList, ListRenderItemInfo, TextStyle, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { helpers, styles, ListItem, ListItemTitle, ListItemSubtitle } from "@strmbrkr/components";

const { Colors } = styles;
const { scale } = helpers;

interface IListProps {
  large?: boolean;
  wrapperStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  leftIcon?: string;
  isIconHidden?: boolean;
  leftIconStyle?: TextStyle;
  disabled?: boolean;
  disabledIcon?: string;
  disabledIconStyle?: TextStyle;
}

const List = (props: IListProps) => {
  const onPress = () => {
    action("On item press")();
  };

  const keyExtractor = (item: IData) => item.firstLine;

  const renderItem = ({ item }: ListRenderItemInfo<IData>) => (
    <ListItem disabled={false} {...props} onPress={onPress}>
      <ListItemTitle style={props.titleStyle}>{item.firstLine}</ListItemTitle>
      <ListItemSubtitle style={props.subtitleStyle}>{item.secondLine}</ListItemSubtitle>
    </ListItem>
  );

  return <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem} />;
};

storiesOf("ListItem", module)
  .add("List Items", () => <List />)
  .add("List Items With LeftIcon", () => <List leftIcon="avengers" />)
  .add("Large List Items", () => <List large />)
  .add("Large List Items With LeftIcon", () => <List large leftIcon="avengers" />)
  .add("Custom List Items without right Icon", () => (
    <List
      wrapperStyle={stylesheet.wrapper}
      containerStyle={stylesheet.container}
      titleStyle={stylesheet.title}
      subtitleStyle={stylesheet.subtitle}
      isIconHidden
    />
  ))
  .add("Custom List Items With LeftIcon", () => (
    <List
      wrapperStyle={stylesheet.wrapper}
      containerStyle={stylesheet.container}
      titleStyle={stylesheet.title}
      subtitleStyle={stylesheet.subtitle}
      leftIcon="avengers"
      leftIconStyle={stylesheet.leftIcon}
    />
  ))
  .add("List with disabled items", () => <List disabled />)
  .add("List with disabled items and custom icon", () => <List disabled disabledIcon="x" />)
  .add("List with disabled items and custom icon styles", () => (
    <List disabled disabledIcon="mobile-unavailable" disabledIconStyle={stylesheet.disabledIcon} />
  ));

interface IData {
  firstLine: string;
  secondLine: string;
}
const data: IData[] = [
  {
    firstLine: "First 1",
    secondLine: "Second 1"
  },
  {
    firstLine: "First 2",
    secondLine: "Second 2"
  },
  {
    firstLine: "First 3",
    secondLine: "Second 3"
  },
  {
    firstLine: "First 4",
    secondLine: "Second 4"
  }
];

interface IStyles {
  wrapper: ViewStyle;
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  leftIcon: TextStyle;
  disabledIcon: TextStyle;
}
const stylesheet: IStyles = {
  wrapper: {
    marginBottom: scale(20)
  },
  container: {
    minHeight: scale(120)
  },
  title: {
    color: Colors.blue
  },
  subtitle: {
    fontStyle: "italic"
  },
  leftIcon: {
    color: Colors.gray
  },
  disabledIcon: {
    fontSize: scale(25)
  }
};
