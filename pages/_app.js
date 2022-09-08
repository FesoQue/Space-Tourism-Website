import '../styles/globals.css';
import Sidebar from '../components/shared_layout/Sidebar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/assets/favicon.png' />
      </Head>
      <Component {...pageProps} />
      <Sidebar />
    </>
  );
}

export default MyApp;
