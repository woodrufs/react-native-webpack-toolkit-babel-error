import * as React from "react";
import { useState } from "react";
import DateTimePicker, { AndroidEvent } from "@react-native-community/datetimepicker";
import { IDatePickerProps } from "./DatePicker-types";

const DatePicker: React.FC<IDatePickerProps> = ({
  minDate,
  maxDate,
  initialDate,
  onDateSelected
}: IDatePickerProps) => {
  const onChange = (event: AndroidEvent, selectedDate?: Date) => {
    if (event.type === "dismissed" || !selectedDate) {
      return;
    }
    onDateSelected(selectedDate);
  };

  const [mode] = useState<"date" | "time">("date");
  return (
    <DateTimePicker
      value={initialDate ?? new Date()}
      minimumDate={minDate || undefined}
      maximumDate={maxDate || undefined}
      onChange={onChange}
      mode={mode}
      display="calendar"
    />
  );
};

export { DatePicker };
