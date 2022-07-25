import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import styles from './FormSearchState.module.css';
import DatePickerFromTo from 'DatePickerFromTo';
import {
  useGetCountries,
  useGetDataAdvance_country_data_interval,
} from '../../../API/APIcalls';
import { checkDates, formatDate, formatDateWithTime } from '../../../utility';
import { errorFieldsInitial, useStore } from '../../../utility/initialValue';
import { IErrorFields, IIntervalData, IStatistics } from '../../../model';
import * as setError from '../../../utility/setErrorMessage';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const FormSearchState = () => {
  const [dateFrom, setDateFrom] = useState<Date>(new Date());
  const [dateTo, setDateTo] = useState<Date>(new Date());
  const [intervalData, setIntervalData] =
    React.useState<IIntervalData>('month');
  const [enabled_data, setEnabled_data] = React.useState(false);
  const [autocompleteValue, setAutocompleteValue] = useState<string>('');
  const { data: countries, error: errorCounttries } = useGetCountries();
  const [errorFields, setErrorFields] =
    useState<IErrorFields>(errorFieldsInitial);

  const { data, isFetching } = useGetDataAdvance_country_data_interval(
    autocompleteValue,
    intervalData,
    dateFrom,
    dateTo,
    enabled_data
  );
  if (enabled_data && data) {
    useStore.getState().populateDataAPI(data);
    useStore.getState().populateInfoDataAPI({
      tab: 'Stato',
      date: formatDateWithTime(new Date()),
      filters: {
        interval: intervalData,
        dateFrom: formatDate(dateFrom),
        dateTo: formatDate(dateTo),
        state: autocompleteValue,
      },
    });
    setEnabled_data(false);
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let fieldError = errorFieldsInitial;
    if (
      !(
        dateFrom &&
        dateTo &&
        checkDates(new Date(formatDate(dateFrom)), new Date(formatDate(dateTo)))
      )
    ) {
      fieldError = setError.getDatesError(fieldError);
    } else {
      fieldError = setError.getDatesNoError(fieldError);
      setEnabled_data(true);
    }
    setErrorFields({ ...errorFields, ...fieldError });
  };

  const dataArrayValue =
    (countries &&
      Object.entries(countries).map((item) => `[${item[0]}] ${item[1]}`)) ??
    [];

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className="flex_row_center_w100">
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
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={dataArrayValue}
        className={styles.autocomplete}
        sx={{
          mb: 1,
        }}
        renderInput={(params) => (
          <TextField
            required
            error={Boolean(errorCounttries)}
            helperText={
              errorCounttries ? 'Errore durante il recupero degli stati' : ''
            }
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
        <Button variant="contained" type="submit">
          Cerca
        </Button>
      )}
    </form>
  );
};

export default FormSearchState;
