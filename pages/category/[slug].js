import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Banner from '../../components/Banner';
import Breadcrumb from '../../components/Breadcrumb';
import CategoryMain from '../../components/CategoryMain';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { products, filters } from '../../data';

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

function Category({ data }) {
  const router = useRouter();

  const { slug } = router.query;

  const {
    static: {
      urlBaseEstaticos,
      diretorioCategorias,
    },
    menu,
  } = data;

  const categories = {
    staticUrl: `${urlBaseEstaticos}${diretorioCategorias}/`,
    menu,
  };

  return (
    <>
      <Head>
        <title>{`${slug.toUpperCase()} - Braskape`}</title>
      </Head>
      <Header categories={categories} />
      <Banner isCategory />
      <Breadcrumb slug={slug} />
      <CategoryMain products={products} filters={filters} />
      <Footer />
    </>
  );
}

export default Category;
