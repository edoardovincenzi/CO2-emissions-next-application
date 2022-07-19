import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Container, StyledEngineProvider } from '@mui/material';
import BasicBreadcrumbs, {
  ICrumbs,
} from '../components/Breadcrumbs/Breadcrumbs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import { APIBASEURL } from '../constant';

const queryClient = new QueryClient();

export const axiosCall = axios.create({
  baseURL: APIBASEURL,
  headers: {
    'Content-type': 'application/json',
  },
});

const array: ICrumbs[] = [
  { name: 'Home', href: '/' },
  { name: 'Grafico generico', href: '/grafico-generico' },
  { name: 'Grafico ricerca avanzata', href: '/grafico-ricerca-avanzata' },
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
      <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
          <Header />
          <BasicBreadcrumbs crumbs={array} />
          <Container>
            <Component {...pageProps} />
          </Container>
          <Footer />
        </QueryClientProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
