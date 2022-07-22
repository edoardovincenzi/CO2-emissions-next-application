import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IDateFromTo, IErrorFields } from '../../model';

const DatePickerFromTo = ({
  dateFromTo,
  errorFields,
}: {
  dateFromTo: IDateFromTo;
  errorFields: IErrorFields;
}) => {
  const { dateF, dateT } = dateFromTo;
  const { dateFrom, setDateFrom } = dateF;
  const { dateTo, setDateTo } = dateT;

  return (
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
            sx={{ ml: 1, mb: 1 }}
            error={errorFields.dates.IsError}
            helperText={errorFields.dates.textMessage}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerFromTo;
