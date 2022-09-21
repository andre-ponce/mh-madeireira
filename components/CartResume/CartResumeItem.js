import { format } from '@/helpers';
import { url } from '@/services/statics.service';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import { useState } from 'react';
import { CartQuantityPanel } from './CartQuantityPanel';

export default function CartResumeItem({ item }) {
  const [error, setError] = useState('');

  return (
    <li className="items__item">
      <Image src={url.imageProduct(item.foto)} className="item__image" width={50} height={50} />
      <span className="item__name">
        {item.nome}
      </span>
      <div className="item__values">
        <CartQuantityPanel
          id={item.id}
          quantity={item.quantidade}
          stock={item.estoqueDisponivel}
          maxToSeal={item.maximoPorVenda}
          onError={(msg) => setError(msg)}
        />
        <span className="values__block">
          <span className="values__qtd">
            {item.quantidade}
            {' x '}
            {format.currency(item.precoUnitario)}
          </span>
          <span className="values__price">{format.currency(item.precoTotal)}</span>
        </span>
      </div>
      {!isEmpty(error) && <div className="item__message">{error}</div>}
      {
        item.quantidade > item.estoqueDisponivel && (
          <div className="item__message">
            Há apenas
            {' '}
            {item.estoqueDisponivel}
            {' '}
            unidades desse produto disponíveis para venda, altere a quantidade para continuar!
          </div>
        )
      }
      {
        !!item.maximoPorVenda && item.quantidade > item.maximoPorVenda && (
          <div className="item__message">
            Você só pode comprar
            {' '}
            {item.maximoPorVenda}
            {' '}
            unidades desse produto, altere a quantidade para continuar!
          </div>
        )
      }
    </li>
  );
}
