import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Container, StyledEngineProvider } from '@mui/material';
import BasicBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { QueryClientProvider } from '@tanstack/react-query';
import { array, queryClient } from '../utility/initialValue';

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
          <div
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Header />
            <BasicBreadcrumbs crumbs={array} />
            <Container sx={{ mb: 'auto', mt: 'auto' }}>
              <Component {...pageProps} />
            </Container>
            <Footer />
          </div>
        </QueryClientProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
