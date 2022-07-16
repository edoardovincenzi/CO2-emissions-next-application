import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Choice from '../components/Choice/Choice';

const Home: NextPage = () => {
  return (
    <div className={styles.indexDiv}>
      <Choice text="Grafico CO2 degli ultimi 6 mesi di uno stato" />
      <Choice text="Calcolo CO2 con ricerca avanzata di uno stato" />
    </div>
  );
};

export default Home;
