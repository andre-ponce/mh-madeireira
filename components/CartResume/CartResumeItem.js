import { format } from '@/helpers';
import { url } from '@/services/statics.service';
import Image from 'next/image';
import { CartQuantityPanel } from './CartQuantityPanel';

export default function CartResumeItem(prop) {
  const { item } = prop;
  return (
    <li className="items__item">
      <Image src={url.imageProduct(item.foto)} className="item__image" width={50} height={50} />
      <span className="item__name">
        {item.nome}
      </span>
      <div className="item__values">
        <CartQuantityPanel {...prop} />
        <span className="values__block">
          <span className="values__qtd">
            {item.quantidade}
            {' x '}
            {format.currency(item.precoUnitario)}
          </span>
          <span className="values__price">{format.currency(item.precoTotal)}</span>
        </span>
      </div>
    </li>
  );
}
