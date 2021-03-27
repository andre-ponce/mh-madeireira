import React from 'react';
import Head from 'next/head';

import HelloWorld from '../components/HelloWorld';

function Home() {
  return (
    <>
      <Head>
        <title>Home - Braskape</title>
      </Head>
      <HelloWorld />
    </>
  );
}

export default Home;
