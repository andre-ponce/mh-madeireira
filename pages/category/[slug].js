import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import Breadcrumb from '../../components/Breadcrumb';
import CategoryMain from '../../components/CategoryMain';

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

  return (
    <>
    <Head>
      <title>{`${slug.toUpperCase()} - Braskape`}</title>
    </Head>

    <Layout globalData={data}>
      <Banner isCategory />
      <Breadcrumb
        path={[{
          nome: product.name,
          slug: `/category/${slug}`
        }]}
        classPrefix="category"
      />
      <CategoryMain products={products} filters={filters} />
    </Layout>
    </>
  );
}

export default Category;
