import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './FindLatLong.module.css';
import ModaleFindLatLong from './ModaleFindLatLong/ModaleFindLatLong';
import { useStore } from '../../../../utility/initialValue';

const FindLatLong = () => {
  const [open, setOpen] = React.useState(false);
  const cityFounded = useStore((store) => store.cityFounded);
  const lat = useStore((store) => store.latitudine);
  const long = useStore((store) => store.longitudine);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    useStore.getState().populateError('');
    setOpen(false);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Box className={`flex_row_center ${styles.box}`}>
        <Box className={`flex_row_center ${styles.box}`}>
          <p className={styles.box_p}>
            Non conosci la latitudine e la longitudine della tua città?
          </p>
          <Button variant="outlined" onClick={handleOpen}>
            Premi qui
          </Button>
        </Box>
        {open && <ModaleFindLatLong handleClose={handleClose} open={open} />}
      </Box>
      {cityFounded && (
        <Box>
          <p
            className={styles.box_p}
          >{`Città trovata premendo: \n${cityFounded}`}</p>
          <p
            className={styles.box_p}
          >{`con latitudine: ${lat} e longitudine: ${long}`}</p>
        </Box>
      )}
    </Box>
  );
};

export default FindLatLong;
