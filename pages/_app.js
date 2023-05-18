import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
// import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/all.scss';
import React from 'react';
import CookieConsent from '@/components/CookieConsent';
import { AppErrorBoundary } from '@/components/AppErrorBoundary';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab, faEnvelope);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AppErrorBoundary>
        <Component {...pageProps} />
      </AppErrorBoundary>
      <div id="modal-container" />
      <div className="fixed-shadow" />
      <CookieConsent />
    </>
  );
}

export default MyApp;
