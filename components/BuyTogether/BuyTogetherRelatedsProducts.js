import Slick from 'react-slick';
import { BuyTogetherItem } from "./BuyTogetherItem";

export function BuyTogetherRelatedsProducts({ products }) {
  const others = [products];
  const numberOfItens = products.length;
  let splitArray = false;
  if (numberOfItens > 3) {
    splitArray = true;
    const splitIndex = Math.ceil(numberOfItens / 2);
    others.push(products.slice(splitIndex));
    others[0] = products.slice(0, splitIndex);
  }

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplay: false,
    autoplaySpeed: 2000,
  }

  return (
    <div className="buy-together__options">
      <Slick className="buy-together-carousel" {...settings}>
        {others[0].map(p => <BuyTogetherItem product={p} />)}
      </Slick>

      {!!splitArray &&
        <Slick className="buy-together-carousel" {...settings}>
          {others[1].map(p => <BuyTogetherItem product={p} />)}
        </Slick>
      }
    </div>
  );
}
