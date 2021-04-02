import React, { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/all.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Bootstrap */}
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/76ba51fd1c.js" crossOrigin="anonymous" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
