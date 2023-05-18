import CheckoutContext from '@/contexts/CheckoutContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from '@/helpers';
import {
  useContext, useEffect, useRef, useState,
} from 'react';
import { CheckoutBox } from './CheckoutBox';

export function DiscountBox() {
  const {
    value: {
      codigoCupomDesconto,
      cupomDeDesconto,
    },
    setCoupon,
  } = useContext(CheckoutContext);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const inputCode = useRef(null);

  const {
    codigo,
    desconto,
    percentual,
    cupomDeFrete,
  } = cupomDeDesconto || {};

  useEffect(() => {
    setCode(codigoCupomDesconto || '');
  }, [codigoCupomDesconto]);

  async function applyCode(couponCode) {
    setError('');
    if (!couponCode) {
      inputCode.current.focus();
    } else {
      const [success] = await setCoupon(couponCode);

      if (!success) {
        setError('Cupom inválido ou expirado!');
        inputCode.current.focus();
        inputCode.current.select();
      }
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      applyCode(code);
    }
  }

  return (
    <CheckoutBox title="Cupom de desconto" icon="fa-tag">
      <div className="discount-coupon--container">
        {cupomDeDesconto
          ? (
            <div className="discount-coupon--ticket">
              <span className="discount-coupon--title">Cupom</span>
              <span className="discount-coupon--remove">
                <FontAwesomeIcon icon="fa-times" />
                {' '}
                remover cupom
              </span>
              <div className="discount-coupon--details">
                <span className="discount-coupon--code">{codigo}</span>
                <span className="discount-coupon--description">
                  {cupomDeFrete && (
                    <>
                      {
                        percentual && (
                          <>
                            {desconto === 100 && <span>Frete grátis</span>}
                            {desconto < 100 && <span>{`${desconto}% de desconto no frete!`}</span>}
                          </>
                        )
                      }
                      {
                        !percentual && (
                          <span>
                            {`Até ${format.currency(desconto)} de desconto no frete!`}
                          </span>
                        )
                      }
                    </>
                  )}
                  {!cupomDeFrete && (
                    <>
                      {
                        percentual && (
                          <span>
                            {`${desconto}% de desconto no seu pedido!`}
                          </span>
                        )
                      }
                      {
                        !percentual && (
                          <span>
                            {`Até ${format.currency(desconto)} de desconto no seu pedido!`}
                          </span>
                        )
                      }
                    </>
                  )}
                </span>
              </div>
            </div>
          ) : (
            <div className="discount-coupon--form">
              <span className="discount-coupon--form-title">Inserir cupom de desconto:</span>
              <div className="discount-coupon--form-group">
                <input ref={inputCode} onKeyDown={handleKeyDown} type="text" value={code} onChange={(e) => setCode(e.target.value)} />
                {error && <span className="discount-coupon--form-error">{error}</span>}
                <button className="box-button btn-secondary" type="button" onClick={() => applyCode(code)}>APLICAR CUPOM</button>
              </div>
            </div>
          )}
      </div>
    </CheckoutBox>
  );
}
