import { Dispatch, SetStateAction } from 'react';

export function formatDateWithTime(date: Date) {
  return `${[
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-')} ${[
    padTo2Digits(date.getHours()),
    padTo2Digits(date.getMinutes()),
    padTo2Digits(date.getSeconds()),
  ].join(':')}`;
}

export function formatDate(date: Date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}

export function getSplitString(str: string, element: string) {
  return str.split(element)[0];
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

export function setErrorTimeout(
  setText: Dispatch<SetStateAction<string>>,
  text: string,
  time: number
) {
  setText(text);
  setTimeout(() => {
    setText('');
  }, time);
}

export function getYearMonthDay_FromData(data: Date) {
  const day = data.getDay();
  const month = data.getMonth() + 1;
  const year = data.getFullYear();
  return { day: day, month: month, year: year };
}

export function checkDates(dateFrom: Date, dateTo: Date) {
  return dateTo.valueOf() - dateFrom.valueOf() >= 0;
}
