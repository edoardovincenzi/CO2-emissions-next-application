import React, { useEffect, useRef, useState } from 'react';
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import style from './FormSearchLatLong.module.css';
import DatePickerFromTo from 'GenericComponents/DatePickerFromTo';
import { formatDate } from '../../../utility';
import { checkDates } from '../../../utility/checkDatas';
import { errorFieldsInitial, useStore } from '../../../utility/costant';
import { IErrorFields, IIntervalData } from '../../../model';
import * as setError from '../../../utility/setErrorMessage';
import FindLatLong from 'FindLatLong/FindLatLong';

const FormSearchLatLong = () => {
  const [dateFrom, setDateFrom] = useState<Date>(new Date());
  const [dateTo, setDateTo] = useState<Date>(new Date());
  const [intervalData, setIntervalData] =
    React.useState<IIntervalData>('month');
  const latitudine = useRef<any>();
  const longitudine = useRef<any>();
  const storeLatitudine = useStore((state) => state.latitudine);
  const storeLongitudine = useStore((state) => state.longitudine);

  useEffect(() => {
    latitudine.current.value = storeLatitudine;
    longitudine.current.value = storeLongitudine;
  }, [storeLatitudine, storeLongitudine]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let fieldError = errorFieldsInitial;
    fieldError = !(
      dateFrom &&
      dateTo &&
      checkDates(new Date(formatDate(dateFrom)), new Date(formatDate(dateTo)))
    )
      ? setError.getDatesError(fieldError)
      : setError.getDatesNoError(fieldError);

    fieldError = isNaN(Number(latitudine.current?.value))
      ? setError.getLatError(fieldError)
      : setError.getLatNoError(fieldError);

    fieldError = isNaN(Number(longitudine.current?.value))
      ? setError.getLongError(fieldError)
      : setError.getLongNoError(fieldError);

    setErrorFields({ ...errorFields, ...fieldError });

    useStore.getState().populateLat(null);
    useStore.getState().populateLong(null);
  };

  const [errorFields, setErrorFields] =
    useState<IErrorFields>(errorFieldsInitial);

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <div className={style.box}>
        <DatePickerFromTo
          dateFromTo={{
            dateF: { dateFrom: dateFrom, setDateFrom: setDateFrom },
            dateT: { dateTo: dateTo, setDateTo: setDateTo },
          }}
          intervalDataState={{
            intervalData: intervalData,
            setIntervalData: setIntervalData,
          }}
          errorFields={errorFields}
        />
      </div>
      <FindLatLong />
      <Box className={style.box} sx={{ mb: 2 }}>
        <TextField
          error={errorFields.latitudine.IsError}
          helperText={errorFields.latitudine.textMessage}
          id="standard-basic"
          type="number"
          inputRef={latitudine}
          label="Latitudine"
          variant="standard"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          sx={{ ml: 1 }}
          error={errorFields.longitudine.IsError}
          helperText={errorFields.longitudine.textMessage}
          id="standard-basic"
          type="number"
          inputRef={longitudine}
          label="Longitudine"
          variant="standard"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
      <Button variant="contained" type="submit">
        Cerca
      </Button>
    </form>
  );
};

export default FormSearchLatLong;
