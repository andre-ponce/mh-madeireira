import React from 'react';
import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {
  return (
    <>
      <Head>
        <title>Home - Braskape</title>
      </Head>
      <Header />
      <Footer />
    </>
  );
}

export default Home;
