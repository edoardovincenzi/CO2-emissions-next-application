import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './ModaleFindLatLong.module.css';
import { ICityState, IModal } from '../../../model';
import { Box, Button, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { useStore } from '../../../utility/costant';
import { useGetLatLong_city } from '../../../API/APIcalls';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const ModaleFindLatLong = ({ handleClose, open }: IModal) => {
  const [cityState, setCityState] = useState<string>('');
  const { error, data, isFetching } = useGetLatLong_city(cityState);
  const city = useRef<HTMLInputElement | null>();
  const storeError = useStore((state) => state.error);

  const handleFind = () => {
    setCityState(city.current?.value ?? '');
  };

  if (cityState && data && typeof data !== 'string') {
    useStore.getState().populateLat(Number(data.results[0].geometry.lat));
    useStore.getState().populateLong(Number(data.results[0].geometry.lng));
    useStore.getState().populateError('');
    handleClose();
  } else if (cityState && data && typeof data === 'string') {
    useStore.getState().populateError('Città non trovata');
  } else if (cityState && error) {
    useStore.getState().populateError('Errore durante la chiamata al server');
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modal}>
        <Typography
          sx={{ mb: 1 }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Inserisci la città per recuperare la latitudine e la longitudine.
        </Typography>
        <TextField
          id="standard-basic"
          inputRef={city}
          helperText="I dati trovati verranno aumaticamente popolati"
          label="Città"
          variant="standard"
        />
        {storeError && <p className={styles.error}>{storeError}</p>}
        {isFetching ? (
          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
          >
            Cerca
          </LoadingButton>
        ) : (
          <Button variant="contained" onClick={handleFind}>
            Cerca
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default ModaleFindLatLong;
