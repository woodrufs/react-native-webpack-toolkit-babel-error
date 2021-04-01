import * as React from "react";
import { View } from "react-native";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { MuxText, StaticTable } from "@strmbrkr/components";
import { CenterView, FieldContainer } from "../decorators";

interface IData {
  key1: string;
  key2: string;
  key3: string;
  key4: string;
  key5: null;
}
const data: IData = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4",
  key5: null
};

type Data = Array<string | null>;
const d: Data = ["value1", "value2", "value3", "value4", null];
// TODO: clean up messy use of MuxText
const DataView = () => (
  <View>
    <MuxText>{"{"}</MuxText>
    {d.map((val, index) => {
      return (
        <MuxText key={index.toString() + (val ?? (index * index).toString())}>{`    ${index.toString()}:  ${
          val ?? ""
        }`}</MuxText>
      );
    })}
    <MuxText>{"}"}</MuxText>
  </View>
);

const Table = () => (
  <View>
    <DataView />
    <StaticTable data={data} />
  </View>
);

const TableWithTitle = () => (
  <View>
    <DataView />
    <StaticTable data={data} title="Title" />
  </View>
);

const onTitleIconPress = () => action("Title icon pressed");
const TableWithTitleAndIcon = () => (
  <View>
    <DataView />
    <StaticTable data={data} title="Title" titleIcon="stopwatch" titleIconOnPress={onTitleIconPress} />
  </View>
);

storiesOf("StaticTable", module)
  .addDecorator((getStory) => (
    <CenterView>
      <FieldContainer>{getStory()}</FieldContainer>
    </CenterView>
  ))
  .add("StaticTable", () => <Table />)
  .add("StaticTable with title", () => <TableWithTitle />)
  .add("StaticTable with title and icon", () => <TableWithTitleAndIcon />);
