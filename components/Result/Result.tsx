import React from 'react';
import ResultData from 'Result/ResultData';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TooltipContent from 'TooltipContent';
import { Paper, Typography } from '@mui/material';
import { IInfoDataAPI } from '../../model';
import styles from './Result.module.css';

const Result = ({ infoDataAPI }: { infoDataAPI: IInfoDataAPI }) => {
  return (
    <>
      <Typography sx={{ mb: 2, mt: 2 }} className={styles.title} variant="h5">
        {`Risultati del tab: ${infoDataAPI.tab} delle ${infoDataAPI.date}`}
        <Tooltip
          sx={{ p: 2 }}
          title={<TooltipContent info={infoDataAPI.filters} />}
        >
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Typography>
      <Paper
        elevation={3}
        className={`${styles.paperBasic} ${styles.paperFlex}`}
        sx={{ mt: 2 }}
      >
        <ResultData />
      </Paper>
    </>
  );
};

export default Result;
