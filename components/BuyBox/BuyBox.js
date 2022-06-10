import { useState } from 'react';
import { format, linkTo } from '@/helpers';
import Link from 'next/link';
import PaymentOptionsModal from '../PaymentOptionsModal';
import { ProductFreightSimulator } from './ProductFreightSimulator';

export function BuyBox({ product, payConditions }) {
  const [payOptionsVisible, setPayOptionsVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const precoDe = product.precoDe > product.precoPor
    ? product.precoDe
    : product.precoPor * 1.05;

  return (
    <>
      <div className="product__infos">
        <span className="infos__title">{product.nome}</span>
        <span className="infos__cod">
          COD:
          {' '}
          {product.sku}
        </span>
        <span className="infos__brand">
          MARCA:
          {' '}
          <Link href={linkTo.brand({ slug: 'marca', id: product.marcaId })}>
            {product.marcaNome}
          </Link>
        </span>
      </div>

      <div className="product__price-infos">
        <div className="price-infos__prices">
          <span className="prices__old">{format.currency(precoDe)}</span>
          <strong className="prices__actual">{format.currency(product.precoPor)}</strong>
        </div>
        {
          product.parcelamento > 1 && (
            <span className="price-infos__installments">
              {product.parcelamento}
              x de
              {' '}
              <strong>{format.currency(product.valorParcelamento)}</strong>
            </span>
          )
        }
        {
          product.descontoPagamentoAvista > 0 && (
            <span className="price-infos__discount">
              {format.currency(product.precoAvista)}
              {' '}
              à vista (com
              {' '}
              {product.descontoPagamentoAvista * 100}
              % de desconto)
            </span>
          )
        }
        <div className="price-infos__buy">
          <div className="block_qtd-item">
            <button type="button" className="qtd-item__minus" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              <i className="fa-solid fa-minus" />
            </button>
            <input type="number" disabled min="0" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button type="button" className="qtd-item__plus" onClick={() => setQuantity(quantity + 1)}>
              <i className="fa-solid fa-plus" />
            </button>
          </div>
          <button type="button" className="buy__button">COMPRAR</button>
        </div>
        <div className="price-infos__installments-group">
          <button type="button" className="open__modal" onClick={() => setPayOptionsVisible(true)}>Mais opcões de pagamento</button>
          <div className="installments-group__installments">
            <span>
              {product.parcelamento}
              x de
              {' '}
              {format.currency(product.valorParcelamento)}
            </span>
          </div>
        </div>
        <ProductFreightSimulator productId={product.id} />
      </div>

      {
        !!payOptionsVisible && (
          <PaymentOptionsModal
            payConditions={payConditions}
            handleHide={() => setPayOptionsVisible(false)}
          />
        )
      }
    </>
  );
}
