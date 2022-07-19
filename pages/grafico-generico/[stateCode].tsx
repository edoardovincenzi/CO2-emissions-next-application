import React from 'react';
import { useRouter } from 'next/router';
import { useGetLastSixMonths } from '../../API/APIcalls';
import VerticalBar from '../../components/VerticalBar';
import { Typography } from '@mui/material';

const GraphGenericState = () => {
  const router = useRouter();
  const { stateCode } = router.query;
  const { data, error } = useGetLastSixMonths(stateCode as string);

  if (error) {
    return (
      <>
        Errore durante la ricezione dei dati. DA INSERIRE REDIRECT A PAGINA
        PRIMA
      </>
    );
  }
  return (
    <>
      <Typography variant="h3" component="h1" sx={{ color: 'black', mb: 5 }}>
        Grafico raffigurante la media delle emissioni di C02 dello stato con il
        codice :{stateCode}
      </Typography>
      <VerticalBar data={data} />
    </>
  );
};

export default GraphGenericState;
