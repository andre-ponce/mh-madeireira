import React from 'react';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Bootstrap */}
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/76ba51fd1c.js" crossOrigin="anonymous" />
        {/* Carousel */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick-theme.css" />
        {/* Animations */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
      </Head>

      <Component {...pageProps} />

    </>
  );
}

export default MyApp;
