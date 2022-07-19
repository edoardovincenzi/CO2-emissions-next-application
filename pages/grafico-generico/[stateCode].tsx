import React from 'react';
import { useRouter } from 'next/router';
import { useGetLastSixMonths } from '../../API/APIcalls';
import VerticalBar from '../../components/VerticalBar';
import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import styles from '../../styles/GraficoGenericoScelta.module.css';

const GraphGenericState = () => {
  const router = useRouter();
  const { stateCode } = router.query;
  const { isLoading, data, error } = useGetLastSixMonths(stateCode as string);

  if (error) {
    return (
      <div className={styles.flexboxDiv}>
        <Typography
          variant="h5"
          sx={{ color: 'black', mb: 5, textAlign: 'center' }}
        >
          Errore durante la ricezione dei dati.
        </Typography>
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
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="h5"
        sx={{ color: 'black', mb: 5, textAlign: 'center' }}
      >
        Grafico raffigurante la media delle emissioni di C02 dello stato con il
        codice : {stateCode}
      </Typography>
      {data && <VerticalBar data={data} />}
    </Box>
  );
};

export default GraphGenericState;
