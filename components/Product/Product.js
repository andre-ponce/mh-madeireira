import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { format, image, linkTo } from '@/helpers';
import { addToCart, removeFromCart } from '@/services/cart.service';
import SessionContext from '@/contexts/SessionContext';
import { url } from '@/services/statics.service';
import SweetAlert from 'react-bootstrap-sweetalert';
import { RemoteImage } from '../Image';

function Product({ product }) {
  return (
    <div className='product-card'>
      <div className=" product">
        <Link href={linkTo.product(product)} passHref>
          <a className="product__topbar">
            <RemoteImage src={url.imageProduct(product.fotoUrl)} alt={product.name} width={200} height={200} />
            {
              product.desconto > 0 && (
                <span className="topbar__discount">
                  {format.discount(product.desconto)}
                </span>
              )
            }
          </a>
        </Link>
        <div className="product__infos">
          <strong className="infos__brand">{product.marcaNome}</strong>
          <span className="infos__ref">{product.sku}</span>
          <Link href={linkTo.product(product)} passHref>
            <a href>
              <h3 className="infos__name">
                {product.nome}
              </h3>
            </a>
          </Link>
        </div>
        {
          product.sobConsulta ? (
            <div className="product__prices">
              <span className="prices__old">&nbsp;</span>
              <strong className="prices__actual">Preço sob consulta</strong>
              <span className="prices__installments">&nbsp;</span>
            </div>
          ) : (
            <div className="product__prices">
              {
                product.precoDe > product.precoPor
                  ? <span className="prices__old">{format.currency(product.precoDe)}</span>
                  : <span className="prices__old">&nbsp;</span>
              }
              <strong className="prices__actual">{format.currency(product.precoPor)}</strong>
              <span className="prices__installments">
                {product.parcelamento}
                x de
                {' '}
                <strong>
                  {format.currency(product.valorParcelamento)}
                </strong>
                {' '}
                s/ juros
              </span>
            </div>
          )
        }
        <div className="product__actions">
          <Link href={product.categoryLink || linkTo.product(product)}>
            <a className="actions__link-category">
              {product.categoria || ' '}
            </a>
          </Link>
          <ProductCardQuickAction product={product} />
        </div>
      </div>
    </div>
  );
}

function ProductCardQuickAction({ product }) {
  const { itens } = useContext(SessionContext);
  const current = itens?.filter(item => item.produtoId === product.id)[0];
  const [busy, setBusy] = useState(false);
  const alreadyIn = !!current;
  const initialQuantity = alreadyIn ? current.quantidade : 1;
  const [quantity, setQuantity] = useState(initialQuantity);
  const [alertMessage, setAlertMessage] = useState('');
  const maxToSeal = [product.estoque, product.maximoPorVenda].filter(x => x && x > 0).sort()[0];

  const add = async () => {
    if (quantity === 0) {
      await removeFromCart(product.id);
      return;
    }

    if (quantity > product.estoque) {
      setAlertMessage(`Há apenas ${product.estoque} unidades desse produto disponíveis para venda, altere a quantidade para continuar!`);
      return;
    }

    if (product.maximoPorVenda && quantity > product.maximoPorVenda) {
      setAlertMessage(`Você só pode comprar ${product.maximoPorVenda} unidades desse produto, altere a quantidade para continuar!`);
      return;
    }

    setBusy(true);
    await addToCart(product, quantity);
    setBusy(false);
  };

  let ctaLabel = '';
  if (product.sobConsulta) {
    ctaLabel = 'SAIBA MAIS';
  } else if (product.vendaExtraSite) {
    ctaLabel = 'SAIBA MAIS';
  } else if (!product.temEstoque) {
    ctaLabel = 'SEM ESTOQUE';
  } else if (product.usaGrade) {
    ctaLabel = 'COMPRAR';
  }

  if (ctaLabel) {
    return (
      <div className="actions__buy">
        <Link href={linkTo.product(product)}>
          <button type="button" className="buy__button">{ctaLabel}</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="actions__buy">
        <div className="number-input buy__qtd">

          <input
            className="quantity"
            min="0"
            name="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button
            disabled={quantity < maxToSeal}
            onClick={() => setQuantity(quantity + 1)}
            className="plus"
          >
            <i className="fa-solid fa-chevron-up" />
          </button>
          <button
            disabled={quantity < 2}
            onClick={() => setQuantity(quantity - 1)}
            className="minus"
          >
            <i className="fa-solid fa-chevron-down" />
          </button>
        </div>
        <button type="button" className="buy__button" onClick={async () => add()}>
          {
            busy
              ? <span><i className='fa fa-spin fa-spinner'></i></span>
              : (alreadyIn ? <>ALTERAR</> : <>COMPRAR</>)
          }
        </button>
      </div>
      {
        alertMessage
        && (
          <SweetAlert
            onConfirm={() => setAlertMessage('')}
            btnSize="sm"
            confirmBtnText="Entendi"
            confirmBtnStyle={{ border: '0' }}
          >
            {alertMessage}
          </SweetAlert>
        )
      }
    </>
  )
}

export default Product;
