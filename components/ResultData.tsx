import React from 'react';
import { IStatistics } from '../model';
import { useStore } from '../utility/costant';

const ResultData = () => {
  const dataAPIStore = useStore((store) => store.dataAPI);
  return (
    <>
      {dataAPIStore.length > 0 ? (
        dataAPIStore.map((item: IStatistics, index: number) => (
          <p key={index}>{index}</p>
        ))
      ) : (
        <p>Non ci sono risultati</p>
      )}
    </>
  );
};

export default ResultData;

// Aggiungere sullo store globale informazioni utili sulla ricerca fatta:

// Data di ricerca
// Da che tab è stata fatta
// con che filtri ( quest'ultima parte inserire informazioni in un tooltips)
