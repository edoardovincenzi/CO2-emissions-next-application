import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import style from '../../../styles/GraficoRicercaAvanzata.module.css';
import DatePickerFromTo from 'GenericComponents/DatePickerFromTo';
import { useGetCountries } from '../../../API/APIcalls';
import { formatDate } from '../../../utility';
import { checkDates } from '../../../utility/checkDatas';
import { errorFieldsInitial } from '../../../utility/costant';
import { IErrorFields } from '../../../model';
import * as setError from '../../../utility/setErrorMessage';

const FormSearchState = () => {
  const [dateFrom, setDateFrom] = useState<Date | null>(new Date());
  const [dateTo, setDateTo] = useState<Date | null>(new Date());
  const [autocompleteValue, setAutocompleteValue] = useState<string>('');
  const { data: countries, error } = useGetCountries();
  const [errorFields, setErrorFields] =
    useState<IErrorFields>(errorFieldsInitial);

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

    setErrorFields({ ...errorFields, ...fieldError });
    console.log(dateFrom, dateTo, autocompleteValue);
  };

  const dataArrayValue =
    (countries &&
      Object.entries(countries).map((item) => `[${item[0]}] ${item[1]}`)) ??
    [];

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <div className={style.box}>
        <DatePickerFromTo
          dateFromTo={{
            dateF: { dateFrom: dateFrom, setDateFrom: setDateFrom },
            dateT: { dateTo: dateTo, setDateTo: setDateTo },
          }}
          errorFields={errorFields}
        />
      </div>
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
      <Button variant="contained" type="submit">
        Cerca
      </Button>
    </form>
  );
};

export default FormSearchState;
