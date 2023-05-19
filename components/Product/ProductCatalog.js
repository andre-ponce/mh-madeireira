import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format, linkTo } from '@/helpers';
import { addToCart, removeFromCart } from '@/services/cart.service';
import SessionContext from '@/contexts/SessionContext';
import { url } from '@/services/statics.service';
import SweetAlert from 'react-bootstrap-sweetalert';
import { RemoteImage } from '../Image';

function ProductCatalog({ product }) {
  return (
    <div className="product-card">
      <div className="product">
        <Link href={linkTo.product(product)} passHref>
          <a className="product__topbar">
            <RemoteImage
              src={url.imageProduct(product.fotoUrl)}
              alt={product.name}
              width={200}
              height={200}
            />
            <DiscountTag discount={product.desconto} />
          </a>
        </Link>
        <div className="product__infos">
          <strong className="infos__brand">{product.marcaNome}</strong>
          <span className="infos__ref">{`ref: ${product.sku}`}</span>
          <Link href={linkTo.product(product)} passHref>
            <a>
              <h3 className="infos__name">{product.nome}</h3>
            </a>
          </Link>
        </div>
        <Price product={product} />
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

function DiscountTag({ discount }) {
  if (discount <= 0) {
    return <></>;
  }

  return (
    <span className="topbar__discount">
      {format.discount(discount)}
    </span>
  );
}

function ProductCardQuickAction({ product }) {
  const { itens } = useContext(SessionContext);
  const current = itens?.filter(({ produtoId }) => produtoId === product.id)[0];
  const [busy, setBusy] = useState(false);
  const alreadyIn = !!current;
  const initialQuantity = alreadyIn ? current.quantidade : 1;
  const [quantity, setQuantity] = useState(initialQuantity);
  const [alertMessage, setAlertMessage] = useState('');
  const maxToSeal = [product.estoque, product.maximoPorVenda].filter((x) => x && x > 0).sort()[0];

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

  if (!product.temEstoque) {
    return <></>;
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
            type="button"
            disabled={quantity < maxToSeal}
            onClick={() => setQuantity(quantity + 1)}
            className="plus"
          >
            <FontAwesomeIcon icon="fa-chevron-up" />
          </button>
          <button
            type="button"
            disabled={quantity < 2}
            onClick={() => setQuantity(quantity - 1)}
            className="minus"
          >
            <FontAwesomeIcon icon="fa-chevron-down" />
          </button>
        </div>
        <button type="button" className="buy__button" onClick={async () => add()}>
          {!!busy && (<span><FontAwesomeIcon icon="fa-spin fa-spinner" /></span>)}
          {!busy && (alreadyIn ? <span key="alterar">ALTERAR</span> : <span key="comprar">COMPRAR</span>)}
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
  );
}

function Price({ product }) {
  if (product.sobConsulta) {
    return (
      <div className="product__prices">
        <strong className="prices__actual">Preço sob consulta</strong>
      </div>
    );
  }

  if (!product.temEstoque) {
    return (
      <div className="product__prices">
        <strong className="prices__actual">Produto Indisponível</strong>
      </div>
    );
  }

  return (
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
  );
}

export default ProductCatalog;
