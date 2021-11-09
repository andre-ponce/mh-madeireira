import Head from 'next/head';

import Layout from '../../components/Layout';
import { ProductMain } from "../../components/ProductMain/ProductMain";
import { products } from '../../data';

export async function getServerSideProps() {
  const response = await fetch(process.env.API_DADOS_GLOBAIS_HOST, {
    headers: {
      authorization: process.env.API_DADOS_GLOBAIS_TOKEN,
    },
  });

  const global = await response.json();

  if (!global) {
    return {
      notFound: true,
    };
  }

  const product = Object.assign(products[0], {
    relatedsProducts: products.slice(1, 8),
    media: [
      {
        src: '/images/braskape-pagina-produto.jpg',
        alt: 'Photo One',
        id: 1
      }, {
        src: '/images/braskape-pagina-produto.jpg',
        alt: 'Photo Two',
        id: 2
      }, {
        src: '/images/braskape-pagina-produto.jpg',
        alt: 'Photo Three',
        id: 3
      }, {
        src: '/images/braskape-pagina-produto.jpg',
        alt: 'Photo Four',
        id: 4
      }, {
        src: '/images/braskape-pagina-produto.jpg',
        alt: 'Photo Five',
        id: 5
      },
    ],
    buyTogether: products.slice(1, 6),
  })

  return {
    props: {
      global,
      product,
    },
  };
}

function Product({ global, product }) {
  return (
    <>
      <Head>
        <title>Home - Braskape</title>
      </Head>

      <Layout globalData={global}>
        <ProductMain product={product} />
      </Layout>
    </>
  )
}

export default Product;
