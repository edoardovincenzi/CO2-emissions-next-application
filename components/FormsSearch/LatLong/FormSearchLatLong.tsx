import React, { useEffect, useRef, useState } from 'react';
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import style from './FormSearchLatLong.module.css';
import DatePickerFromTo from 'GenericComponents/DatePickerFromTo';
import { formatDate, formatDateWithTime } from '../../../utility';
import { errorFieldsInitial, useStore } from '../../../utility/costant';
import { IErrorFields, IIntervalData } from '../../../model';
import * as setError from '../../../utility/setErrorMessage';
import FindLatLong from 'FindLatLong/FindLatLong';
import { useGetDataAdvance_lat_long_data_interval } from '../../../API/APIcalls';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const FormSearchLatLong = () => {
  const [dateFrom, setDateFrom] = useState<Date>(new Date());
  const [dateTo, setDateTo] = useState<Date>(new Date());
  const [enabled_data, setEnabled_data] = React.useState(false);
  const [intervalData, setIntervalData] =
    React.useState<IIntervalData>('month');
  const latitudine = useRef<any>();
  const longitudine = useRef<any>();
  const storeLatitudine = useStore((state) => state.latitudine);
  const storeLongitudine = useStore((state) => state.longitudine);

  const { isLoading, data, error, isFetching } =
    useGetDataAdvance_lat_long_data_interval(
      Number(latitudine.current?.value),
      Number(longitudine.current?.value),
      intervalData,
      dateFrom,
      dateTo,
      enabled_data
    );

  if (enabled_data && data) {
    useStore.getState().populateDataAPI(data);
    useStore.getState().populateInfoDataAPI({
      tab: 'Latitudine e longitudine',
      date: formatDateWithTime(new Date()),
      filters: {
        interval: intervalData,
        dateFrom: formatDate(dateFrom),
        dateTo: formatDate(dateTo),
        lat: latitudine.current?.value,
        long: longitudine.current?.value,
      },
    });
    setEnabled_data(false);
  }

  useEffect(() => {
    latitudine.current.value = storeLatitudine;
    longitudine.current.value = storeLongitudine;
  }, [storeLatitudine, storeLongitudine]);

  const onSubmit = () => {
    let fieldError = errorFieldsInitial;
    if (
      !setError.checkDateNoError(dateFrom, dateTo) &&
      !isNaN(Number(latitudine.current?.value)) &&
      !isNaN(Number(longitudine.current?.value))
    ) {
      fieldError = setError.allNoError(fieldError);
      // useStore.getState().populateLat(null);
      // useStore.getState().populateLong(null);
      setEnabled_data(true);
      setErrorFields({ ...errorFields, ...fieldError });
    } else {
      fieldError = setError.setAllFieldsError(
        dateFrom,
        dateTo,
        Number(latitudine.current?.value),
        Number(longitudine.current?.value),
        fieldError
      );
      setErrorFields({ ...errorFields, ...fieldError });
    }
  };

  const [errorFields, setErrorFields] =
    useState<IErrorFields>(errorFieldsInitial);

  return (
    <Box className={style.form}>
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
      {isFetching ? (
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Cerca
        </LoadingButton>
      ) : (
        <Button variant="contained" onClick={onSubmit}>
          Cerca
        </Button>
      )}
    </Box>
  );
};

export default FormSearchLatLong;
