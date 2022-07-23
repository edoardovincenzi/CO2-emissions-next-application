import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IDatePickerFromTo, IIntervalData } from '../../model';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/system';

const DatePickerFromTo = ({
  dateFromTo,
  intervalDataState,
  errorFields,
}: IDatePickerFromTo) => {
  const { intervalData, setIntervalData } = intervalDataState;
  const { dateF, dateT } = dateFromTo;
  const { dateFrom, setDateFrom } = dateF;
  const { dateTo, setDateTo } = dateT;
  const handleChange = (event: SelectChangeEvent) => {
    if (['day', 'month', 'year'].includes(event.target.value)) {
      setIntervalData(event.target.value as IIntervalData);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Intervallo intercorrenza dati
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={intervalData}
          label="Intervallo intercorrenza dati"
          onChange={handleChange}
        >
          <MenuItem value={'day'}>Giorno</MenuItem>
          <MenuItem value={'month'}>Mese</MenuItem>
          <MenuItem value={'year'}>Anno</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ mt: 1 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disableFuture
            label="Data da"
            openTo="year"
            views={['year', 'month', 'day']}
            value={dateFrom}
            onChange={(newDateFrom: Date | null) => {
              newDateFrom && setDateFrom(newDateFrom);
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
              newDateTo && setDateTo(newDateTo);
            }}
            renderInput={(params: any) => (
              <TextField
                required
                {...params}
                sx={{ ml: 1, mb: 1 }}
                error={errorFields.dates.IsError}
                helperText={errorFields.dates.textMessage}
              />
            )}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default DatePickerFromTo;
