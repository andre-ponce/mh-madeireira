import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

import Banner from '../components/Banner';
import ProductCarousel from '../components/ProductCarousel';
import CenterBanner from '../components/CenterBanner';
import Highlights from '../components/Highlights';
import Brands from '../components/Brands';
import Layout from '../components/Layout';
import { getHomeData } from '../services/home.service';
import { getGlobalData } from '../services/dados-globais.service';

export async function getServerSideProps() {
  const home = await getHomeData();
  const global = await getGlobalData();

  return {
    props: { home, global },
  };
}

const Wrapper = styled.main`
  padding-top: 20px;
  background: #eeeeee;
`;

function Home({ home, global }) {
  const {
    static: {
      urlBaseEstaticos,
      diretorioMarcas,
    },
    seo: {
      tituloGlobal,
    },
  } = global;

  const {
    maisBuscados,
    destaques,
    carrosselMarcas,
    carrosselBanners,
  } = home;

  const brands = {
    staticUrl: `${urlBaseEstaticos}${diretorioMarcas}/`,
    marcas: carrosselMarcas,
  };

  return (
    <>
      <Head>
        <title>{tituloGlobal}</title>
      </Head>

      <Layout globalData={global}>
        <Banner isMobile={isMobile} carousel={carrosselBanners} />
        <Wrapper>
          <ProductCarousel products={maisBuscados} title="Os mais buscados" />
          <CenterBanner />
          <Highlights products={destaques} />
          <Brands brands={brands} />
        </Wrapper>
      </Layout>
    </>
  );
}

export default Home;
