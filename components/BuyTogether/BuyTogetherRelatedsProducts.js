import Slick from 'react-slick';

import { BuyTogetherItem } from "./BuyTogetherItem";

const slickSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplay: false,
  autoplaySpeed: 2000,
}

export function BuyTogetherRelatedsProducts({ products, isChecked, onChange }) {

  const groups = [products];
  const numberOfItens = products.length;
  
  if (numberOfItens > 3) {
    const splitIndex = Math.ceil(numberOfItens / 2);
    groups.push(groups[0].slice(splitIndex));
    groups[0] = groups[0].slice(0, splitIndex);
  }

  return (
    <div className="buy-together__options">
      {
        groups.map((group, index) => (
          <Slick className="buy-together-carousel" key={index} {...slickSettings}>
            {
              group.map(product =>
                <BuyTogetherItem
                  key={product.id} 
                  product={product} 
                  isChecked={isChecked} 
                  onChange={() => onChange(product.id)}
                />
              )
            }
          </Slick>
        ))
      }
    </div>
  );
}
