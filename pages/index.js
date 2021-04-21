import React from 'react';
import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';
import MostWanted from '../components/MostWanted';

function Home() {
  return (
    <>
      <Head>
        <title>Home - Braskape</title>
      </Head>
      <Header />
      <main className="main">
        <MostWanted />
      </main>
      <Footer />
    </>
  );
}

export default Home;
