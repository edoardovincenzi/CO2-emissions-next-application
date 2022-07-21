export function getDatesError(fieldError: any) {
  return {
    ...fieldError,
    dates: {
      IsError: true,
      textMessage: 'FROM deve essere minore ti TO',
    },
  };
}

export function getDatesNoError(fieldError: any) {
  return {
    ...fieldError,
    dates: {
      IsError: false,
      textMessage: '',
    },
  };
}

export function getLatError(fieldError: any) {
  return {
    ...fieldError,
    latitudine: {
      IsError: true,
      textMessage: 'Latitudine deve essere un numero',
    },
  };
}

export function getLatNoError(fieldError: any) {
  return {
    ...fieldError,
    latitudine: {
      IsError: false,
      textMessage: '',
    },
  };
}

export function getLongError(fieldError: any) {
  return {
    ...fieldError,
    longitudine: {
      IsError: true,
      textMessage: 'Longitudine deve essere un numero',
    },
  };
}

export function getLongNoError(fieldError: any) {
  return {
    ...fieldError,
    longitudine: {
      IsError: false,
      textMessage: '',
    },
  };
}
