import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
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

  return {
    props: { 
      global, 
      product: {
        relatedsProducts: products.slice(0, 8),
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
        ]
      } 
    },
  };
}

function Product({ global, product }) {

  const {
    static: {
      urlBaseEstaticos,
      diretorioCategorias,
    },
    menu,
  } = global;

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
      <ProductMain product={product}/>
      <Footer />
    </>
  )
}

export default Product;