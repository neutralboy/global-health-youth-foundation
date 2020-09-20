import Head from 'next/head';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <link rel="stylesheet" href="/bulma.min.css" />
          <link rel="icon" href="https://res.cloudinary.com/poorna/image/upload/c_scale,w_16/v1598529986/ghyf/KOSHA_-GHYF.ico" sizes="16x16" /> 
          <link href="https://fonts.googleapis.com/css2?family=Alata&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
        </Head>
        <Nav />
        <div style={{ marginTop: "4rem" }} />
          <Component {...pageProps} />
        <Footer />
      </>
    )
}

export default MyApp
