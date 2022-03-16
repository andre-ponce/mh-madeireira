/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useRef } from 'react';
import { format, image } from '../../helpers';

export function BuyTogetherItem({ product, isChecked, onChange }) {
  const ref = useRef();

  useEffect(() => {
    if (ref) {
      ref.current.checked = isChecked(product.id);
    }
  }, [isChecked(product.id)]);

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
        <img src={image.fallback(product.fotoUrl)} style={{ maxHeight: '140px', maxWidth: '140px' }} alt="product" />
      </label>

      <label htmlFor={`buy-together-${product.id}`} className="option-to-buy__infos">
        <span className="infos__name">{product.nome}</span>
        <span className="infos__price">{format.currency(product.precoPor)}</span>
      </label>

    </div>
  );
}
