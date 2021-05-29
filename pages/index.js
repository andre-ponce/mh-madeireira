import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Header from '../components/Header';
import MostWanted from '../components/MostWanted';
import CenterBanner from '../components/CenterBanner';
import Highlights from '../components/Highlights';
import Brands from '../components/Brands';
import OtherCategories from '../components/OtherCategories';
import Footer from '../components/Footer';

import products from '../services/data';

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

const Wrapper = styled.main`
  padding-top: 20px;
  background: #eeeeee;
`;

function Home({ data }) {
  const {
    static: {
      urlBaseEstaticos,
      diretorioMarcas,
      diretorioCategorias,
    },
    marcas,
    menu,
  } = data;

  const brands = {
    staticUrl: `${urlBaseEstaticos}${diretorioMarcas}/`,
    marcas,
  };

  const categories = {
    staticUrl: `${urlBaseEstaticos}${diretorioCategorias}/`,
    menu,
  };

  return (
    <>
      <Head>
        <title>Home - Braskape</title>
      </Head>
      <Header categories={categories} />
      <Wrapper>
        <MostWanted products={products} />
        <CenterBanner />
        <Highlights products={products} />
        <Brands brands={brands} />
        <OtherCategories />
      </Wrapper>
      <Footer />
    </>
  );
}

export default Home;
