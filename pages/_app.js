import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/all.scss';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <div id="modal-container" />
      <div className="fixed-shadow" />
    </>
  );
}

export default MyApp;
