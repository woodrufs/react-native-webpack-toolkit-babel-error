interface IDatePickerProps {
  onDateSelected(date: Date): void;
  minDate?: Date;
  maxDate?: Date;
  initialDate?: Date;
  onCancelDateSelection(): void;
}

export { IDatePickerProps };
