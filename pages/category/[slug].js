import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import Breadcrumb from '../../components/Breadcrumb';
import CategoryMain from '../../components/CategoryMain';

import { products, filters } from '../../data';
import { getGlobalData } from '../../services/dados-globais.service';

export async function getServerSideProps() {
  const global = await getGlobalData();
  return {
    props: { global },
  };
}

function Category({ global }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
    <Head>
      <title>{`${slug.toUpperCase()} - Braskape`}</title>
    </Head>

    <Layout globalData={global}>
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
