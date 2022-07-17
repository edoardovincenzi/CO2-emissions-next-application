import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Choice from '../components/Choice/Choice';
import Link from 'next/link';
import LinkMUI from '@mui/material/Link';

const Home: NextPage = () => {
  return (
    <div className={styles.indexDiv}>
      <Link href="grafico-generico" passHref>
        <LinkMUI underline="none" sx={{ width: '100%' }}>
          <Choice text="Grafico CO2 degli ultimi 6 mesi di uno stato" />
        </LinkMUI>
      </Link>
      <Link href="grafico-ricerca-avanzata" passHref>
        <LinkMUI underline="none" sx={{ width: '100%' }}>
          <Choice text="Calcolo CO2 con ricerca avanzata di uno stato" />
        </LinkMUI>
      </Link>
    </div>
  );
};

export default Home;
