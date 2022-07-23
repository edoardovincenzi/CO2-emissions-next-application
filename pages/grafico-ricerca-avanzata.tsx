import { useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FormSearchState, FormSearchLatLong } from 'FormsSearch';
import styles from '../styles/GraficoRicercaAvanzata.module.css';
import { useStore } from '../utility/costant';
import Result from 'Result/Result';

const GraficoRicercaAvanzata = () => {
  const [value, setValue] = useState('2');
  const infoDataAPI = useStore((states) => states.infoDataAPI);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper elevation={3} className={styles.paperBasic}>
        <TabContext value={value}>
          <Box>
            <TabList
              variant="fullWidth"
              onChange={handleChange}
              aria-label="different form"
              centered
            >
              <Tab
                sx={{ pointerEvents: 'none' }}
                label="Cerca per : "
                value="1"
              />
              <Tab label="Stato" value="2" />
              <Tab label="Latitudine e Longitudine" value="3" />
            </TabList>
          </Box>
          <TabPanel value="2">
            <FormSearchState />
          </TabPanel>
          <TabPanel value="3">
            <FormSearchLatLong />
          </TabPanel>
        </TabContext>
      </Paper>
      {infoDataAPI.tab && infoDataAPI.date && (
        <Result infoDataAPI={infoDataAPI} />
      )}
    </>
  );
};

export default GraficoRicercaAvanzata;
