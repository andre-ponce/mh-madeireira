import { useState } from "react";
import Head from 'next/head';
import Slick from 'react-slick';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/Product';

import { products } from '../../data';
import settingsRelateds from '../../components/MostWanted/settings';
import Breadcrumb from "../../components/Breadcrumb";
import Tab from "../../components/Tab";
import ProductRecommendForm from "../../components/ProductRecommendForm";
import ProductDescription from "../../components/ProductDescription";
import BuyTogether from "../../components/BuyTogether";
import BuyBox from "../../components/BuyBox";
import PhotoGalery from "../../components/PhotoGalery";
import PaymentOptionsModal from "../../components/PaymentOptionsModal";

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
  const [payOptionsVisible, setPayOptionsVisible] = useState(false)

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

      <main className="container_serie-ds">
        <Breadcrumb slug="Produto" classPrefix="product" />
        <div className="main__product">
          <div className="product__container-left" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
            <PhotoGalery photos={photos} />
          </div>
          <div className="product__container-right" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
            <BuyBox />
          </div>
        </div>

        <BuyTogether />

        <Tab 
          initialTab="Descrição"
          tabs={[
            {
              title: 'Descrição',
              body: <ProductDescription rawHtml={'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p><div className="triade__item__title">INFORMAÇÕES TÉCNICAS</div><dl><dt>Composição</dt><dd>100% Algodão</dd></dl>'} />
            },
            {
              title: 'De sua opinião',
              body: <><a href="">Dê a sua opnião</a></>
            },
            {
              title: 'Indique um amigo',
              body: <ProductRecommendForm />
            }
          ]} 
        />

        <section className="container_serie-ds" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
          <h2 className="title-border-left">Produtos relacionados</h2>
          <Slick className="products-carousel" {...settingsRelateds}>
            {
              products.slice(0, 5).map(p => <ProductCard mostWanted product={p} />)
            }
          </Slick>
        </section>

        {
          !!payOptionsVisible &&
          <PaymentOptionsModal hide={() => setPayOptionsVisible(false)} />
        }
      </main>
      <Footer />

    </>
  )
}

export default Product;