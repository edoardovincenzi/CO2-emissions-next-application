import { useState } from 'react';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FormSearchState, FormSearchLatLong } from 'FormsSearch';

const GraficoRicercaAvanzata = () => {
  const [value, setValue] = useState('2');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} sx={{ height: '100%', backgroundColor: '#DBD8F0' }}>
      <TabContext value={value}>
        <Box>
          {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
          <TabList onChange={handleChange} aria-label="different form" centered>
            <Tab disabled label="Cerca per : " value="1" />
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
  );
};

export default GraficoRicercaAvanzata;
