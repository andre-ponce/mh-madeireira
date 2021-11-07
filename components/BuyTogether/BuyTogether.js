import { BuyTogetherMainProduct } from './BuyTogetherMainProduct';
import { BuyTogetherRelatedsProducts } from './BuyTogetherRelatedsProducts';
import { BuyTogetherResume } from './BuyTogetherResume';

export function BuyTogether({ mainProduct, relatedsProducts }) {
  return (
    <div className="main__buy-together" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
      <h2 className="title-border-left">Compre Junto</h2>
      <div className="buy-together__container">
        <BuyTogetherMainProduct product={mainProduct} />
        <img className="buy-together__image-plus" src="/images/buy-together_plus.png" alt="" />
        <BuyTogetherRelatedsProducts products={relatedsProducts} />
        <BuyTogetherResume />
      </div>
    </div>
  );
}
