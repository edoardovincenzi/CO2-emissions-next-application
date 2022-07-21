export function checkDates(dateFrom: Date, dateTo: Date) {
  return dateTo.valueOf() - dateFrom.valueOf() >= 0;
}

export function checkEmptyValue(value: any) {
  return Boolean(value);
}

export function checkIsNumber(value: any) {
  return typeof value === 'number' ? true : false;
}
