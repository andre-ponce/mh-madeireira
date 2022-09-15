import React from 'react';
import Head from 'next/head';
import { isMobile } from 'react-device-detect';
import { getHomeData } from '@/server/api/home.api';
import { getGlobalData } from '@/server/api/global.api';
import Banner from '../components/Banner';
import ProductCarousel from '../components/ProductCarousel';
import CenterBanner from '../components/CenterBanner';
import Highlights from '../components/Highlights';
import Brands from '../components/Brands';
import Layout from '../components/Layout';

export async function getStaticProps() {
  const [global] = await getGlobalData();
  const [home] = await getHomeData();
  return {
    props: { home, global },
    revalidate: 1,
  };
}

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
        <main style={{ paddingTop: '20px', backgroundColor: '#eeeeee' }}>
          <ProductCarousel products={maisBuscados} title="Os mais buscados" />
          <CenterBanner />
          <Highlights products={destaques} />
          <Brands brands={brands} />
        </main>
      </Layout>
    </>
  );
}

export default Home;
