import { Dispatch, SetStateAction } from 'react';

export function formatDate(date: Date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
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
