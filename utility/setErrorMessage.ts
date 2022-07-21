import { IErrorFields } from '../model';

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
