import React from 'react';
import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

function Home() {
  return (
    <>
      <Head>
        <title>Home - Braskape</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
