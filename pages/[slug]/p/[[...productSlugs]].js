import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Layout from '@/components/Layout';
import { ProductMain } from '@/components/ProductMain/ProductMain';
import { getGlobalData } from '@/server/api/global.api';
import { getProduct, getDescription } from '@/server/api/product.api';

export async function getServerSideProps({ query }) {
  const global = await getGlobalData();
  const [id] = query.productSlugs;
  const { notFound, ...product } = await getProduct(id);
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
    const data = await res.json();
    cb(data);
    return;
  }
  cb([]);
}

function Product({ global, product }) {
  const router = useRouter();
  const [id] = router.query.productSlugs;

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
        <title>{`${product.nome} - ${product.marcaNome} ${global.seo.sulfixoDoTitulo}`}</title>
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