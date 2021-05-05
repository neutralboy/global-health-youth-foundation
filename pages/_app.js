import Head from 'next/head';
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";

import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lato&family=Mr+Dafoe&display=swap" rel="stylesheet" /> 
          <link rel="icon" href="https://res.cloudinary.com/poorna/image/upload/c_scale,w_16/v1598529986/ghyf/KOSHA_-GHYF.ico" sizes="16x16" /> 
        </Head>
        <Nav />
        <div className="font-sans">
          <Component {...pageProps} />
        </div>
        <Footer />
      </>
    )
}

export default MyApp
