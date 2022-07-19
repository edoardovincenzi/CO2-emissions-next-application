import { Button, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useGetCountries } from '../../API/APIcalls';
import styles from '../../styles/GraficoGenericoScelta.module.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/router';
import Cards from '../../components/Cards/Cards';
import CircularProgress from '@mui/material/CircularProgress';

const GraficoGenericoScelta = () => {
  const { isLoading, data: countries, error } = useGetCountries();
  const [autocompleteValue, setAutocompleteValue] = useState('');
  const router = useRouter();

  const dataArrayKeyValue = (countries && Object.entries(countries)) ?? [];
  const dataArrayValue =
    (countries &&
      Object.entries(countries).map((item) => `[${item[0]}] ${item[1]}`)) ??
    [];

  const handleSearch = () => {
    autocompleteValue
      ? router.push(`grafico-generico/${autocompleteValue}`)
      : null;
  };

  if (error) {
    return (
      <div className={styles.flexboxDiv}>
        <Paper elevation={3} className={styles.cardPaper}>
          Non è stato possibile caricare i dati riprova più tardi.
        </Paper>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className={styles.flexboxDiv}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={styles.flexboxDiv}>
      <div className={styles.autocomplete}>
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
        <Button variant="contained" onClick={handleSearch}>
          Cerca
        </Button>
      </div>
      {countries &&
        dataArrayKeyValue.map((item: [string, string][], index: number) => {
          return <Cards item={item} key={index} />;
        })}
    </div>
  );
};

export default GraficoGenericoScelta;
