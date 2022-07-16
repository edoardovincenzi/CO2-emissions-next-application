import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer/Footer';
import { Container } from '@mui/material';
import BasicBreadcrumbs, {
  ICrumbs,
} from '../components/Breadcrumbs/Breadcrumbs';

const array: ICrumbs[] = [
  { name: 'Home', href: '/' },
  { name: 'Grafico generico', href: '/scelta-stato' },
  { name: 'Grafico ricerca avanzata', href: '/scelta-stato' },
];
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Emissioni di co2 per paese</title>
        <meta
          name="description"
          content="Simple Next application - Emissioni di co2 per paese"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <BasicBreadcrumbs crumbs={array} />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}

export default MyApp;
