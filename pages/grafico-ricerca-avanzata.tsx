import React, { useEffect, useRef, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useGetCountries } from '../API/APIcalls';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Button from '@mui/material/Button';
import { checkDates, checkIsNumber } from '../utility/checkDatas';
import {
  getDatesError,
  getDatesNoError,
  getLatError,
  getLatNoError,
  getLongError,
  getLongNoError,
} from '../utility/setErrorMessage';
import style from '../styles/GraficoRicercaAvanzata.module.css';
import { Box } from '@mui/system';

interface IErrorFields {
  dates: { IsError: boolean; textMessage: string };
  latitudine: { IsError: boolean; textMessage: string };
  longitudine: { IsError: boolean; textMessage: string };
}

const GraficoRicercaAvanzata = () => {
  const [dateFrom, setDateFrom] = React.useState<Date | null>(new Date());
  const [dateTo, setDateTo] = React.useState<Date | null>(new Date());
  const [autocompleteValue, setAutocompleteValue] = useState<string>('');
  const latitudine = useRef<HTMLInputElement | null>();
  const longitudine = useRef<HTMLInputElement | null>();
  const { isLoading, data: countries, error } = useGetCountries();
  const [errorFields, setErrorFields] = useState<IErrorFields>({
    dates: { IsError: false, textMessage: '' },
    latitudine: { IsError: false, textMessage: '' },
    longitudine: { IsError: false, textMessage: '' },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let fieldError = {};
    fieldError = !(dateFrom && dateTo && checkDates(dateFrom, dateTo))
      ? getDatesError(fieldError)
      : getDatesNoError(fieldError);

    fieldError = isNaN(Number(latitudine.current?.value))
      ? getLatError(fieldError)
      : getLatNoError(fieldError);

    fieldError = isNaN(Number(longitudine.current?.value))
      ? getLongError(fieldError)
      : getLongNoError(fieldError);

    setErrorFields({ ...errorFields, ...fieldError });
  };

  const dataArrayValue =
    (countries &&
      Object.entries(countries).map((item) => `[${item[0]}] ${item[1]}`)) ??
    [];

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disableFuture
            label="Data da"
            openTo="year"
            views={['year', 'month', 'day']}
            value={dateFrom}
            onChange={(newDateFrom: Date | null) => {
              setDateFrom(newDateFrom);
            }}
            renderInput={(params: any) => (
              <TextField
                required
                {...params}
                error={errorFields.dates.IsError}
                helperText={errorFields.dates.textMessage}
              />
            )}
          />

          <DatePicker
            disableFuture
            label="Data al"
            openTo="year"
            views={['year', 'month', 'day']}
            value={dateTo}
            onChange={(newDateTo: Date | null) => {
              setDateTo(newDateTo);
            }}
            renderInput={(params: any) => (
              <TextField
                required
                {...params}
                sx={{ml: 1,mb: 1,}}
                error={errorFields.dates.IsError}
                helperText={errorFields.dates.textMessage}
              />
            )}
          />
        </LocalizationProvider>
      </Box>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={dataArrayValue}
        sx={{
          width: 300,
          mb: 1,
        }}
        renderInput={(params) => (
          <TextField
            required
            error={Boolean(error)}
            helperText={error ? 'Errore durante il recupero degli stati' : ''}
            {...params}
            label="Stati"
          />
        )}
        onChange={(event, values) => {
          if (values && typeof values === 'string') {
            setAutocompleteValue(values.slice(1, 3));
          }
        }}
      />
      <Box
        sx={{ mb: 2, width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <TextField
          error={errorFields.latitudine.IsError}
          helperText={errorFields.latitudine.textMessage}
          id="standard-basic"
          inputRef={latitudine}
          label="Latitudine"
          variant="standard"
          required
        />
        <TextField
          sx={{ ml: 1 }}
          error={errorFields.longitudine.IsError}
          helperText={errorFields.longitudine.textMessage}
          id="standard-basic"
          inputRef={longitudine}
          label="Longitudine"
          variant="standard"
          required
        />
      </Box>
      <Button variant="contained" type="submit">
        Cerca
      </Button>
    </form>
  );
};

export default GraficoRicercaAvanzata;
