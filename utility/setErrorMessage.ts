import { formatDate } from '.';
import { IErrorFields } from '../model';
import { checkDates } from './checkDatas';

export function getDatesError(fieldError: IErrorFields) {
  return {
    ...fieldError,
    dates: {
      IsError: true,
      textMessage: 'DA deve essere minore di A',
    },
  };
}

export function getDatesNoError(fieldError: IErrorFields) {
  return {
    ...fieldError,
    dates: {
      IsError: false,
      textMessage: '',
    },
  };
}

export function getLatError(fieldError: IErrorFields) {
  return {
    ...fieldError,
    latitudine: {
      IsError: true,
      textMessage: 'Latitudine deve essere un numero',
    },
  };
}

export function getLatNoError(fieldError: IErrorFields) {
  return {
    ...fieldError,
    latitudine: {
      IsError: false,
      textMessage: '',
    },
  };
}

export function getLongError(fieldError: IErrorFields) {
  return {
    ...fieldError,
    longitudine: {
      IsError: true,
      textMessage: 'Longitudine deve essere un numero',
    },
  };
}

export function getLongNoError(fieldError: IErrorFields) {
  return {
    ...fieldError,
    longitudine: {
      IsError: false,
      textMessage: '',
    },
  };
}

export function allNoError(fieldError: IErrorFields) {
  fieldError = getDatesNoError(fieldError);
  fieldError = getLatNoError(fieldError);
  fieldError = getLongNoError(fieldError);
  return fieldError;
}

export function checkDateNoError(dateFrom: Date, dateTo: Date) {
  return !(
    dateFrom &&
    dateTo &&
    checkDates(new Date(formatDate(dateFrom)), new Date(formatDate(dateTo)))
  );
}

export function setAllFieldsError(
  dateFrom: Date,
  dateTo: Date,
  lat: number,
  long: number,
  fieldError: IErrorFields
) {
  fieldError = !(
    dateFrom &&
    dateTo &&
    checkDates(new Date(formatDate(dateFrom)), new Date(formatDate(dateTo)))
  )
    ? getDatesError(fieldError)
    : getDatesNoError(fieldError);

  fieldError = isNaN(lat) ? getLatError(fieldError) : getLatNoError(fieldError);

  fieldError = isNaN(long)
    ? getLongError(fieldError)
    : getLongNoError(fieldError);

  return fieldError;
}
