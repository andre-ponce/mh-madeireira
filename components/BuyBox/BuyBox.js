import { useContext, useState } from 'react';
import { format, linkTo } from '@/helpers';
import Link from 'next/link';
import { addToCart } from '@/services/cart.service';
import GlobalDataContext from '@/contexts/GlobalDataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaymentOptionsModal from '../PaymentOptionsModal';
import { ProductFreightSimulator } from './ProductFreightSimulator';
import ProductRating from '../ProductRating';

export function BuyBox({ product, payConditions }) {
  const isAllowedToBuy = !product.sobConsulta && !product.vendaExtraSite && product.temEstoque;
  const sholdShowThePrice = !product.sobConsulta && product.temEstoque;

  return (
    <>
      <Head
        name={product.nome}
        sku={product.sku}
        brandId={product.marcaId}
        brandName={product.marca}
      />

      <div className="product__price-infos">
        {sholdShowThePrice && <Price product={product} />}
        {
          isAllowedToBuy
            ? <BuyButton productId={product.id} />
            : <CantBuy product={product} />
        }
        {
          sholdShowThePrice && (
            <>
              <Installments
                payConditions={payConditions}
                installments={product.parcelamento}
                installmentsPrice={product.valorParcelamento}
              />
              <ProductFreightSimulator productId={product.id} />
            </>
          )
        }
      </div>
    </>
  );
}

function Head({
  name,
  sku,
  brandId,
  brandName,
}) {
  return (
    <>
      <div className="product__infos">
        <span className="infos__title">{name}</span>
        <span className="infos__cod">{`COD: ${sku}`}</span>
        <span className="infos__brand">
          <Link href={linkTo.brand({ slug: 'marca', id: brandId })}>
            {`MARCA: ${brandName}`}
          </Link>
        </span>
        <ProductRating />
      </div>
    </>
  );
}

function Price({ product }) {
  const hasDiscount = product.precoDe > product.precoPor;

  return (
    <>
      <div className="price-infos__prices">
        {hasDiscount && <span className="prices__old">{format.currency(product.precoDe)}</span>}
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
            {product.descontoPagamentoAvista}
            % de desconto)
          </span>
        )
      }
    </>
  );
}

function BuyButton({ productId }) {
  const [quantity, setQuantity] = useState(1);
  const [busy, setBusy] = useState(false);

  const buy = async () => {
    setBusy(true);
    await addToCart({ id: productId }, quantity);
    setBusy(false);
  };

  return (
    <div className="price-infos__buy">
      <div className="block_qtd-item">
        <button type="button" className="qtd-item__minus" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
          <FontAwesomeIcon icon="fa-minus" />
        </button>
        <input type="number" disabled min="0" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button type="button" className="qtd-item__plus" onClick={() => setQuantity(quantity + 1)}>
          <FontAwesomeIcon icon="fa-plus" />
        </button>
      </div>
      <button onClick={buy} type="button" className="buy__button">
        {
          busy ? (
            <span key="spinner"><FontAwesomeIcon icon="fa-spin fa-spinner" /></span>
          ) : (
            <span key="compra">COMPRAR</span>
          )
        }
      </button>
    </div>
  );
}

function Installments({ payConditions, installments, installmentsPrice }) {
  const [payOptionsVisible, setPayOptionsVisible] = useState(false);

  return (
    <>
      <div className="price-infos__installments-group">
        <button type="button" className="open__modal" onClick={() => setPayOptionsVisible(true)}>Mais opcões de pagamento</button>
        <div className="installments-group__installments">
          <span>
            {installments}
            x de
            {' '}
            {format.currency(installmentsPrice)}
          </span>
        </div>
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

function TalkWithSeller({ whatsapp, product, sku }) {
  const moreInfo = () => {
    if (!whatsapp) return;
    const href = linkTo.whatsappApi(whatsapp, `Olá! Eu gostaria de mais informações sobre o produto '${product}' (cod: ${sku})`);
    window.open(href, '_blank');
  };

  return (
    <div>
      <button onClick={moreInfo} type="button" className="buy__button">Fale com nosso Vendedor</button>
    </div>
  );
}

function CantBuy({ product }) {
  const { institucional: { whatsapp } } = useContext(GlobalDataContext);

  if (product.vendaExtraSite) {
    return (
      <div className="price-infos__offsite">
        <div className="no-price">Venda extra site</div>
        <TalkWithSeller whatsapp={whatsapp} product={product.nome} sku={product.sku} />
      </div>
    );
  }

  if (product.sobConsulta) {
    return (
      <div className="price-infos__offsite">
        <div className="no-price">Preço sob Consulta</div>
        <TalkWithSeller whatsapp={whatsapp} product={product.nome} sku={product.sku} />
      </div>
    );
  }

  if (!product.temEstoque) {
    return (
      <div className="price-infos__unavaliable">
        <button type="button" className="buy__button">Produto Indisponível</button>
      </div>
    );
  }

  return <></>;
}
