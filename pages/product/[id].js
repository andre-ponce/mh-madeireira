import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ProductMain } from "../../components/ProductMain/ProductMain";

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

function Product({ data }) {

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

  const photos = [
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
  ];

  return (
    <>
      <Head>
        <title>Home - Braskape</title>
      </Head>
      <Header categories={categories} />
      <ProductMain photos={photos}/>
      <Footer />
    </>
  )
}

export default Product;