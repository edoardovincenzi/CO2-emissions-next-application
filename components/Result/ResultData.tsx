import React from 'react';
import { IStatistics } from '../../model';
import { formatDate, getSplitString } from '../../utility';
import { useStore } from '../../utility/costant';

const ResultData = () => {
  const dataAPIStore = useStore((store) => store.dataAPI);
  return (
    <>
      {dataAPIStore.length > 0 ? (
        dataAPIStore.map((item: IStatistics, index: number) => (
          <div key={index}>
            <p>{`Dato che va dal ${getSplitString(
              item.time.min.toString(),
              'T'
            )} al ${getSplitString(item.time.max.toString(), 'T')}`}</p>
            <p>{`Media emissioni CO2 :${item.value.average}`}</p>
            <p>{`Massime emissioni CO2 :${item.value.max}`}</p>
            <p>{`Minime emissioni CO2 :${item.value.min}`}</p>
          </div>
        ))
      ) : (
        <p>Non ci sono risultati</p>
      )}
    </>
  );
};

export default ResultData;
