import React from 'react';
import ResultData from 'Result/ResultData';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import TooltipContent from 'TooltipContent';
import { Typography } from '@mui/material';
import styles from './Result.module.css';
import { Box } from '@mui/system';
import { useStore } from '../../utility/initialValue';

const Result = () => {
  const [open, setOpen] = React.useState(false);
  const { info, data } = useStore((states) => states.dataAPI);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {info.tab && info.date && (
        <>
          <Box
            className="flex_column_center"
            sx={{
              mb: 2,
              mt: 2,
            }}
          >
            <Typography className={styles.title} variant="h5">
              Risultati del tab:{' '}
            </Typography>
            <Typography
              className={`flex_row_center ${styles.title}`}
              variant="h5"
            >
              {`${info.tab} delle ${info.date}`}
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
                    title={<TooltipContent info={info.filters} />}
                  >
                    <Button onClick={handleTooltipOpen}>
                      <InfoIcon />
                    </Button>
                  </Tooltip>
                </div>
              </ClickAwayListener>
            </Typography>
          </Box>
          <ResultData data={data} />
        </>
      )}
    </>
  );
};

export default Result;
