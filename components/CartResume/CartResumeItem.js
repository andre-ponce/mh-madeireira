import { format, image } from '@/helpers'; import Image from 'next/image';
import { CartQuantityPanel } from './CartQuantityPanel';

export default function CartResumeItem(prop) {
  const { item } = prop;

  function imageUrl(photo) {
    if (!photo) {
      return image.fallback(photo);
    }
    return `https://www.braskape.com.br/imagens_produtos/${photo}`;
  }

  return (
    <li className="items__item">
      <Image src={imageUrl(item.foto)} className="item__image" width={50} height={50} />
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
