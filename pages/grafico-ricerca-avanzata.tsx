import React, { useRef, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useGetCountries } from '../API/APIcalls';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Button from '@mui/material/Button';

const GraficoRicercaAvanzata: React.FC = () => {
  const onSubmit = (data: any) => console.log(data);
  const [dateFrom, setDateFrom] = React.useState<Date | null>(new Date());
  const [dateTo, setDateTo] = React.useState<Date | null>(new Date());
  const [autocompleteValue, setAutocompleteValue] = useState<string>('');
  const { isLoading, data: countries, error } = useGetCountries();

  const dataArrayValue =
    (countries &&
      Object.entries(countries).map((item) => `[${item[0]}] ${item[1]}`)) ??
    [];

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={onSubmit}>
      {/* register your input into the hook by invoking the "register" function */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          disableFuture
          label="Data da"
          openTo="year"
          views={['year', 'month', 'day']}
          value={dateFrom}
          // {...register('DateFrom', { required: true })}
          onChange={(newDateFrom: Date | null) => {
            setDateFrom(newDateFrom);
          }}
          renderInput={(params: any) => <TextField {...params} />}
        />
        {/* {errors.dateFrom && <span>This field is required</span>} */}

        <DatePicker
          disableFuture
          label="Data al"
          openTo="year"
          views={['year', 'month', 'day']}
          value={dateTo}
          onChange={(newDateTo: Date | null) => {
            setDateTo(newDateTo);
          }}
          renderInput={(params: any) => <TextField {...params} />}
        />
        {/* {errors.DateTo && <span>This field is required</span>} */}
      </LocalizationProvider>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={dataArrayValue}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Stati" />}
        onChange={(event, values) => {
          if (values && typeof values === 'string') {
            setAutocompleteValue(values.slice(1, 3));
          }
        }}
      />
      {/* {errors.Country && <span>This field is required</span>} */}

      <TextField id="standard-basic" label="Longitudine" variant="standard" />
      {/* {errors.Longitudine && <span>This field is required</span>} */}

      <TextField id="standard-basic" label="Latitudine" variant="standard" />
      {/* {errors.Latitudine && <span>This field is required</span>} */}

      <Button variant="contained" type="submit">
        Cerca
      </Button>
    </form>
  );
};

export default GraficoRicercaAvanzata;
