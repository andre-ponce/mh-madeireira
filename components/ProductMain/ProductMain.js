import { useState } from "react";
import Slick from 'react-slick';

import ProductCard from '../Product';
import settingsRelateds from '../MostWanted/settings';
import Breadcrumb from "../Breadcrumb";
import Tab from "../Tab";
import ProductRecommendForm from "../ProductRecommendForm";
import ProductDescription from "../ProductDescription";
import BuyTogether from "../BuyTogether";
import BuyBox from "../BuyBox";
import PhotoGalery from "../PhotoGalery";
import PaymentOptionsModal from "../PaymentOptionsModal";

export function ProductMain({ product }) {
  const [payOptionsVisible, setPayOptionsVisible] = useState(false);

  return (
    <main className="container_serie-ds">
      <Breadcrumb slug="Produto" classPrefix="product" />
      <div className="main__product">
        <div className="product__container-left" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
          <PhotoGalery photos={product.media} />
        </div>
        <div className="product__container-right" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
          <BuyBox />
        </div>
      </div>

      <BuyTogether mainProduct={product} relatedsProducts={product.buyTogether} />

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
        ]} />

      <section className="container_serie-ds" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
        <h2 className="title-border-left">Produtos relacionados</h2>
        <Slick className="products-carousel" {...settingsRelateds}>
          {product.relatedsProducts.map(p => <ProductCard mostWanted product={p} />)}
        </Slick>
      </section>

      {!!payOptionsVisible &&
        <PaymentOptionsModal hide={() => setPayOptionsVisible(false)} />}
    </main>
  );
}
