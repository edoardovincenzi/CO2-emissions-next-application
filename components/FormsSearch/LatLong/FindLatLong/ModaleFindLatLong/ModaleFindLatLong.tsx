import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './ModaleFindLatLong.module.css';
import { ICityState, IModal } from '../../../../../model';
import { Box, Button, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { useStore } from '../../../../../utility/initialValue';
import { useGetLatLong_city } from '../../../../../API/APIcalls';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const ModaleFindLatLong = ({ handleClose, open }: IModal) => {
  const [cityState, setCityState] = useState<string>('');
  const [errorState, setErrorState] = useState<string>('');
  const { error, data, isFetching } = useGetLatLong_city(cityState);
  const city = useRef<HTMLInputElement | null>();

  const handleFind = () => {
    setCityState(city.current?.value ?? '');
  };

  if (cityState && data && data.total_results !== 0) {
    useStore
      .getState()
      .populateLat(Number(data.results[0].geometry.lat.toFixed(0)));
    useStore
      .getState()
      .populateLong(Number(data.results[0].geometry.lng.toFixed(0)));
    useStore.getState().populateCityFounded(data.results[0].formatted);
    setErrorState('');
    handleClose();
  } else if (cityState && data && data.total_results === 0) {
    setErrorState('Città non trovata');
    setCityState('');
  } else if (cityState && error) {
    setErrorState('Errore durante la chiamata al server, riprova più tardi');
    setCityState('');
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
        {errorState && <p className={styles.error}>{errorState}</p>}
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
