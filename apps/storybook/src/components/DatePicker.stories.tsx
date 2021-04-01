import * as React from "react";
import moment from "moment";
import { View, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { DatePicker, LabelPanel, MuxText } from "@strmbrkr/components";

import { CenterView } from "../decorators/CenterView";

const DatePickerWrapper = ({ maxDate, minDate }: { maxDate?: Date; minDate?: Date }) => {
  const [datePickerVisible, setDatePickerVisible] = React.useState<boolean>(false);
  const [datePickerDate, setDatePickerDate] = React.useState<Date | undefined>(undefined);
  const dateSelected = (newDate?: Date) => {
    action("Date picker closed")();
    setDatePickerVisible(false);
    setDatePickerDate(newDate);
  };

  return (
    <View style={stylesheet.container}>
      <LabelPanel
        label="Date Picker"
        value={datePickerDate ? moment(datePickerDate).format("L") : ""}
        valueIcon="calendar"
        onValuePress={() => {
          setDatePickerVisible(true);
        }}
        numberOfLines={1}
      />
      <MuxText>{moment(datePickerDate).format("LL")}</MuxText>
      <MuxText>{moment(datePickerDate).format("LLL")}</MuxText>
      <MuxText>{moment(datePickerDate).format("l")}</MuxText>
      <MuxText>{moment(datePickerDate).format("ll")}</MuxText>
      <MuxText>{moment(datePickerDate).format("lll")}</MuxText>
      {datePickerVisible && (
        <DatePicker
          initialDate={datePickerDate}
          maxDate={maxDate}
          minDate={minDate}
          onCancelDateSelection={() => dateSelected()}
          onDateSelected={dateSelected}
        />
      )}
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    flex: 1
  }
};

storiesOf("Date Picker", module)
  .addDecorator((fn) => <CenterView>{fn()}</CenterView>)
  .add("Default Date Picker", () => <DatePickerWrapper />)
  .add("Min Date of 3/14/2021", () => <DatePickerWrapper minDate={moment("2021-03-14").utc().toDate()} />)
  .add("Max Date of 3/14/2025", () => <DatePickerWrapper maxDate={moment("2025-03-14").utc().toDate()} />);
