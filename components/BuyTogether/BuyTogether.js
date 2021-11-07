import { useEffect, useState } from 'react';

import { BuyTogetherMainProduct } from './BuyTogetherMainProduct';
import { BuyTogetherRelatedsProducts } from './BuyTogetherRelatedsProducts';
import { BuyTogetherResume } from './BuyTogetherResume';

export function BuyTogether({ mainProduct, relatedsProducts }) {
  const [selecteds, setSelecteds] = useState([]);
  const [resume, setResume] = useState({itens: [mainProduct]});

  useEffect(() => {
    setResume({
      itens: [mainProduct, ...relatedsProducts.filter(p => isChecked(p.id))]
    })
  }, [selecteds]);

  function onChange (id) {
    if (isChecked(id)) {
      selecteds.splice(selecteds.indexOf(id), 1)
    }
    else {
      selecteds.push(id)
    }

    setSelecteds([...selecteds]);
  }

  function isChecked (id) {
    return selecteds.includes(id);
  }

  return (
    <div className="main__buy-together" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0">
      <h2 className="title-border-left">Compre Junto</h2>
      <div className="buy-together__container">
        <BuyTogetherMainProduct product={mainProduct} />
        <img className="buy-together__image-plus" src="/images/buy-together_plus.png" alt="" />
        <BuyTogetherRelatedsProducts products={relatedsProducts} onChange={onChange} isChecked={isChecked} />
        <BuyTogetherResume resume={resume}/>
      </div>
    </div>
  );
}
