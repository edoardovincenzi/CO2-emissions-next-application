import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './FindLatLong.module.css';
import ModaleFindLatLong from './ModaleFindLatLong/ModaleFindLatLong';
import { useStore } from '../../utility/costant';

const FindLatLong = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    useStore.getState().populateError('');
    setOpen(false);
  };

  return (
    <Box className={styles.box}>
      <Box className={styles.box}>
        <p>Non conosci la latitudine e la longitudine della tua città?</p>
        <Button variant="outlined" onClick={handleOpen}>
          Premi qui
        </Button>
      </Box>
      {open && <ModaleFindLatLong handleClose={handleClose} open={open} />}
    </Box>
  );
};

export default FindLatLong;
