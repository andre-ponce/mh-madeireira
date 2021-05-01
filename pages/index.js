import React from 'react';
import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

export async function getServerSideProps() {
  const response = await fetch(process.env.API_DADOS_GLOBAIS_HOST, {
    headers: {
      authorization: process.env.API_DADOS_GLOBAIS_TOKEN,
    },
  });

  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

function Home({ data }) {
  const {
    static: {
      urlBaseEstaticos,
      diretorioMarcas,
    },
    marcas,
  } = data;

  const brands = {
    staticUrl: `${urlBaseEstaticos}${diretorioMarcas}/`,
    marcas,
  };

  return (
    <>
      <Head>
        <title>Home - Braskape</title>
      </Head>
      <Header />
      <Main
        brands={brands}
      />
      <Footer />
    </>
  );
}

export default Home;
