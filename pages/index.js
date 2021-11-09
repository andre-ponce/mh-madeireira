import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

import Banner from '../components/Banner';
import ProductCarousel from '../components/ProductCarousel';
import CenterBanner from '../components/CenterBanner';
import Highlights from '../components/Highlights';
import Brands from '../components/Brands';
import OtherCategories from '../components/OtherCategories';

import Layout from '../components/Layout';

import { products } from '../data';

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

      <Layout globalData={data} >
        <Banner isMobile={isMobile} />
        <Wrapper>
          <ProductCarousel products={products} title="Os mais buscados" />
          <CenterBanner />
          <Highlights products={products} />
          <Brands brands={brands} />
          <OtherCategories />
        </Wrapper>
      </Layout>
    </>
  );
}

export default Home;
