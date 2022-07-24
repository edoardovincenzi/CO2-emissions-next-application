import React from 'react';
import ResultData from 'Result/ResultData';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import TooltipContent from 'TooltipContent';
import { Paper, Typography } from '@mui/material';
import { IInfoDataAPI } from '../../model';
import styles from './Result.module.css';
import { Box } from '@mui/system';

const Result = ({ infoDataAPI }: { infoDataAPI: IInfoDataAPI }) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box
        sx={{
          mb: 2,
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography className={styles.title} variant="h5">
          Risultati del tab:{' '}
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className={styles.title}
          variant="h5"
        >
          {`${infoDataAPI.tab} delle ${infoDataAPI.date}`}
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                sx={{ p: 2 }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={<TooltipContent info={infoDataAPI.filters} />}
              >
                <Button onClick={handleTooltipOpen}>
                  <InfoIcon />
                </Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Typography>
      </Box>
      <ResultData />
    </>
  );
};

export default Result;
