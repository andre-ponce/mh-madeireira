import { isEmpty } from 'lodash';

import Breadcrumb from '../Breadcrumb';
import Tab from '../Tab';
import TabPanel from '../Tab/TabPanel';
import ProductRecommendForm from '../ProductRecommendForm';
import ProductDescription from '../ProductDescription';
import BuyTogether from '../BuyTogether';
import BuyBox from '../BuyBox';
import PhotoGalery from '../PhotoGalery';
import ProductCarousel from '../ProductCarousel';
import ProductRating from '../ProductRating';

export function ProductMain({
  product,
  buyTogether,
  relateds,
  galery,
  payConditions,
}) {
  return (
    <main className="container_serie-ds pg-product">

      <Breadcrumb
        path={[{
          nome: product.nome,
          slug: '/product/1',
        }]}
      />

      <div className="main__product">
        <div className="product__container-left" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
          <PhotoGalery photos={galery} />
        </div>
        <div className="product__container-right" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
          <BuyBox product={product} payConditions={payConditions} />
        </div>
      </div>

      {
        !isEmpty(buyTogether)
        && <BuyTogether mainProduct={product} relatedsProducts={buyTogether} />
      }

      <Tab>
        {
          product.descricaoHTML
          && (
            <TabPanel title="Descrição" active>
              <ProductDescription rawHtml={product.descricaoHTML} />
            </TabPanel>
          )
        }
        <TabPanel title="Avalie este produto" active={!product.descricaoHTML}>
          <a href="">Dê a sua opnião</a>
          <ProductRating />
        </TabPanel>
        <TabPanel title="Indique para um amigo">
          <ProductRecommendForm />
        </TabPanel>
      </Tab>

      {
        !isEmpty(relateds)
        && <ProductCarousel products={relateds} title="Produtos relacionados" />
      }
    </main>
  );
}
