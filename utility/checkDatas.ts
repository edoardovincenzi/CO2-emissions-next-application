export function checkDates(dateFrom: Date, dateTo: Date) {
  return dateTo.valueOf() - dateFrom.valueOf() >= 0;
}
