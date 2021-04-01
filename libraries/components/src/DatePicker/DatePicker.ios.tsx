import * as React from "react";
import { useState } from "react";
import { View, ViewStyle } from "react-native";

import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { Overlay } from "../Overlay";
import { Colors, borderRadius } from "../styles";
import { scale } from "../helpers";
import { Button } from "../Button";
import { IDatePickerProps } from "./DatePicker-types";

const DatePicker: React.FC<IDatePickerProps> = ({
  onDateSelected,
  minDate,
  maxDate,
  initialDate,
  onCancelDateSelection
}: IDatePickerProps) => {
  const onChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const onCancel = () => {
    onCancelDateSelection();
  };

  const onSubmit = () => {
    onDateSelected(date);
  };

  const [date, setDate] = useState(initialDate ?? new Date());
  const [mode, setMode] = useState<"date" | "time" | "datetime" | "countdown">("date");
  return (
    <View style={stylesheet.container}>
      <Overlay onPress={onCancel} visible />
      <View style={stylesheet.content}>
        <DateTimePicker
          value={date}
          minimumDate={minDate || undefined}
          maximumDate={maxDate || undefined}
          onChange={onChange}
          mode={mode}
          display="spinner"
        />
        <View style={stylesheet.buttonsPanel}>
          <Button title="Cancel" onPress={onCancel} style={stylesheet.button} />
          <Button title="Ok" onPress={onSubmit} style={stylesheet.button} />
        </View>
      </View>
    </View>
  );
};

interface IStyles {
  container: ViewStyle;
  content: ViewStyle;
  buttonsPanel: ViewStyle;
  button: ViewStyle;
}
const stylesheet: IStyles = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    width: "90%",
    maxWidth: scale(400),
    borderRadius,
    flexDirection: "column",
    backgroundColor: Colors.white
  },
  buttonsPanel: {
    flexDirection: "row",
    paddingBottom: scale(10),
    justifyContent: "flex-end",
    alignItems: "center"
  },
  button: {
    width: scale(100),
    marginRight: scale(10)
  }
};

export { DatePicker, IDatePickerProps };
