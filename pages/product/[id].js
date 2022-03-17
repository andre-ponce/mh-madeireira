import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import { ProductMain } from '../../components/ProductMain/ProductMain';
import { getGlobalData } from '../../services/dados-globais.service';
import { getProduct, getDescription } from '../../services/product.service';

export async function getServerSideProps({ query }) {
  const global = await getGlobalData();
  const { notFound, ...product } = await getProduct(query.id);
  const { descricaoHTML } = await getDescription();

  product.descricaoHTML = descricaoHTML;

  if (notFound) {
    return {
      notFound,
    };
  }

  return {
    props: {
      global,
      product,
    },
  };
}

async function fecthData(url, cb) {
  const res = await fetch(url);
  if (res.status === 200) {
    const products = await res.json();
    cb(products);
    return;
  }
  cb([]);
}

function Product({ global, product }) {
  const router = useRouter();
  const { id } = router.query;

  const [relateds, setRelateds] = useState([]);
  const [buyTogether, setBuyTogether] = useState([]);
  const [galery, setGalery] = useState();
  const [payConditions, setPayConditions] = useState();

  useEffect(() => {
    fecthData(`/api/product/${id}/galery`, setGalery);
    fecthData(`/api/product/${id}/buy-together`, setBuyTogether);
    fecthData(`/api/product/${id}/relateds`, setRelateds);
    fecthData(`/api/product/${id}/payment-conditions`, setPayConditions);
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
          payConditions={payConditions}
        />
      </Layout>
    </>
  );
}

export default Product;
