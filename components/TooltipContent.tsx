import { Typography } from '@mui/material';
import React from 'react';
import { IFilters } from '../model';

const TooltipContent = ({ info }: { info: IFilters }) => {
  return (
    <div className="prova">
      <Typography variant="h5">Filtri utilizzati:</Typography>
      {info.interval && <p>{`Intervallo: ${info.interval}`}</p>}
      {info.dateFrom && <p>{`Data da: ${info.dateFrom}`}</p>}
      {info.dateTo && <p>{`Data a: ${info.dateTo}`}</p>}
      {info.state && <p>{`Stato: ${info.state}`}</p>}
      {info.lat && <p>{`Latitudine: ${info.lat}`}</p>}
      {info.long && <p>{`Longitudine: ${info.long}`}</p>}
    </div>
  );
};

export default TooltipContent;
