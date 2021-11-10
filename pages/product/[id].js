import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import { ProductMain } from "../../components/ProductMain/ProductMain";
import { getProduct } from '../../services/product.service'

export async function getServerSideProps({query}) {
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

  const product = await getProduct(query.id);

  return {
    props: {
      global,
      product,
    },
  };
}

function Product({ global, product }) {
  const router = useRouter();
  const { id } = router.query;

  const [relateds, setRelateds] = useState([]);
  const [buyTogether, setBuyTogether] = useState([]);
  const [galery, setGalery] = useState([]);

  useEffect(() => {
    async function getRelateds () {
      const res = await fetch(`/api/product/${id}/relateds`);
      if (res.status == 200) {
        const relateds = await res.json();
        setRelateds(relateds);
        return;
      }
      setRelateds([]);
    }

    async function getGalery () {
      const res = await fetch(`/api/product/${id}/galery`);
      if (res.status == 200) {
        const relateds = await res.json();
        setGalery(relateds);
        return;
      }
      setGalery([]);
    }

    getRelateds();
    getGalery();
  }, [id]);

  return (
    <>
      <Head>
        <title>Home - Braskape</title>
      </Head>

      <Layout globalData={global}>
        <ProductMain
          product={product}
          buyTogether={buyTogether}
          relateds={relateds}
          galery={galery}
        />
      </Layout>
    </>
  )
}

export default Product;
