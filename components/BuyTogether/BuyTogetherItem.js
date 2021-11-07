import { useEffect, useRef } from "react";

export function BuyTogetherItem({ product, isChecked, onChange }) {
  const ref = useRef();
  
  useEffect(() => {
    if(ref) {
      ref.current.checked = isChecked(product.id);
    }
  }, [isChecked(product.id)])

  return (
    <div className="options__option-to-buy">

      <input
        type="checkbox"
        name={`buy-together-${product.id}`}
        id={`buy-together-${product.id}`}
        ref={ref}
        onChange={onChange}
      />

      <label className="label-img" htmlFor={`buy-together-${product.id}`}>
        <img src={product.image} alt="product" />
      </label>
      
      <label htmlFor={`buy-together-${product.id}`} className="option-to-buy__infos">
        <span className="infos__name">{product.name}</span>
        <span className="infos__price">{product.price}</span>
      </label>

    </div>
  );
}
