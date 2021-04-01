import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { Button, ToastItem, styles, helpers } from "@strmbrkr/components";
import { ToastItemType } from "@strmbrkr/components/lib/ToastItem";
import { FieldContainer } from "../decorators";

const { defaultIndent } = styles;
const { scale } = helpers;

type ToastDataItem = {
  type?: ToastItemType;
  message: string;
  animationDuration?: number;
  isVisible?: boolean;
};

type ToastStateDataItem = {
  type?: ToastItemType;
  message: string;
  animationDuration?: number;
  isVisible?: boolean;
  id: number;
};

type RenderToastDataItem = {
  item: ToastStateDataItem;
};

type ToastProps = {
  items: ToastDataItem[];
};

type ToastState = {
  items: ToastStateDataItem[];
};

const stylesheet = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    alignSelf: "stretch",
    bottom: scale(40),
    left: defaultIndent,
    right: defaultIndent
  },
  storyContainer: {
    flex: 1,
    alignItems: "center"
  },
  fieldContainer: {
    marginTop: scale(10)
  }
});

class Toast extends React.Component<ToastProps, ToastState> {
  static idCounter = 0;

  state = {
    items: new Array<ToastStateDataItem>()
  };

  static getNextId = () => {
    Toast.idCounter += 1;

    return Toast.idCounter;
  };

  componentDidMount() {
    const { items } = this.props;

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ items: items.map(this.assignId) });
  }

  onItemHide(id: number) {
    const { items } = this.state;

    this.setState({
      items: items.filter((item) => item.id !== id)
    });
  }

  addToastItem(type: ToastItemType, animationTime: number) {
    const newItem = {
      type,
      message: `The key - ${Toast.idCounter}`,
      animationDuration: animationTime,
      isVisible: true,
      id: Toast.getNextId()
    };
    const { items } = this.state;
    this.setState({
      items: [...items, newItem]
    });
  }

  assignId = (item: ToastDataItem) => {
    const id = Toast.getNextId();

    return { ...item, id };
  };

  addError() {
    this.addToastItem("error", 1000);
  }

  addWarning() {
    this.addToastItem("warning", 2000);
  }

  addSuccessMessage() {
    this.addToastItem("success", 3000);
  }

  keyExtractor = (item: ToastStateDataItem) => item.id.toString();

  renderToastItem(renderToastDataItem: RenderToastDataItem) {
    const { item } = renderToastDataItem;
    const { type, message, animationDuration, isVisible, id } = item;

    return (
      <ToastItem
        message={message}
        type={type}
        onHide={this.onItemHide.bind(this)}
        id={id}
        animationDuration={animationDuration}
        isVisible={isVisible}
      />
    );
  }

  renderSeparator = () => {
    const separatorStyle = { height: scale(10) };

    return <View style={separatorStyle} />;
  };

  render() {
    const { items } = this.state;
    return (
      <View style={stylesheet.storyContainer}>
        <FieldContainer style={stylesheet.fieldContainer}>
          <Button title="Add Error Toast Item" onPress={this.addError.bind(this)} />
        </FieldContainer>
        <FieldContainer style={stylesheet.fieldContainer}>
          <Button title="Add Warning Toast Item" onPress={this.addWarning.bind(this)} />
        </FieldContainer>
        <FieldContainer style={stylesheet.fieldContainer}>
          <Button title="Add Success Toast Item" onPress={this.addSuccessMessage.bind(this)} />
        </FieldContainer>
        <View style={stylesheet.toastContainer}>
          <FlatList
            data={items}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={this.renderToastItem.bind(this)}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </View>
    );
  }
}

storiesOf("Toast", module)
  .addDecorator((getStory) => getStory())
  .add("Toast example", () => {
    const items: ToastDataItem[] = [
      {
        message: "It is Default toast item type. As you can see the color for error is red.",
        animationDuration: 3000,
        isVisible: true
      },
      {
        message: "The container is on hold.",
        type: "warning",
        animationDuration: 2000,
        isVisible: true
      },
      {
        message: "Containers were moved successfully.",
        type: "success",
        isVisible: true
      }
    ];

    return <Toast items={items} />;
  });
