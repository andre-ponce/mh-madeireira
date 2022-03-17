import { useEffect } from 'react';

import Modal from '../Modal';
import { format } from '../../helpers';

export function PaymentOptionsModal({ payConditions, handleHide }) {
  useEffect(() => {
    const ESC_KEY_CODE = 27;

    function keyUp(e) {
      if (e.keyCode === ESC_KEY_CODE) {
        handleHide();
      }
    }

    window.addEventListener('keyup', keyUp);

    return () => {
      window.removeEventListener('keyup', keyUp);
    };
  }, []);

  return (
    <Modal handleHide={handleHide}>
      <div className="modal__pedido" onClick={(e) => e.stopPropagation()}>
        <a className="close" onClick={handleHide}><i className="fal fa-times" /></a>
        <div className="title">Formas de pagamento</div>
        <div className="modal__forma">
          <a className="modal__forma__item active">Cartão de Crédito</a>
          {/* <a className="modal__forma__item">Boleto</a> */}
        </div>
        <div className="modal__block">
          <table>
            <tbody>

              {
                payConditions.map((p) => (
                  <tr key={p.parcela}>
                    <td>{`${p.parcela}x`}</td>
                    <td>{`de ${format.currency(p.valor)}`}</td>
                    <td>{p.semJuros ? 'sem juros' : 'com juros'}</td>
                    <td>{`total ${format.currency(p.parcela * p.valor)}`}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
}
