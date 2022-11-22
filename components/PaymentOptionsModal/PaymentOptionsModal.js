import { useEffect, useState } from 'react';

import { format } from '@/helpers';
import Modal from '../Modal';

export function PaymentOptionsModal({ payConditions, handleHide }) {
  const [group, setGroup] = useState();

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

  useEffect(() => {
    if (!group) {
      setGroup(payConditions[0]);
    }
  }, [payConditions]);

  if (!group) {
    return (<></>);
  }

  const maxInstallments = group.bandeiras.map((b) => b.parcelas.length).sort().reverse()[0];
  const parcelas = [...new Array(maxInstallments).keys()].filter((x) => x);

  return (
    <Modal handleHide={handleHide}>
      <div className="modal_app" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="close" onClick={handleHide}>
          <i className="fal fa-times" />
        </button>
        <div className="title">Formas de pagamento</div>
        <div className="modal__forma">
          {
            payConditions.map((p) => (
              <span
                onClick={() => setGroup(p)}
                className={`modal__forma__item ${group.id === p.id ? 'active' : ''}`}
              >
                {p.nome}
              </span>
            ))
          }
        </div>
        <div className="modal__block">
          <table>
            <tbody>
              <tr>
                {
                  group.bandeiras.map((b) => <th>{b.bandeira}</th>)
                }
              </tr>
              {
                parcelas.map((p) => (
                  <tr key={p}>
                    {
                      group.bandeiras.map((b) => (
                        <td>{`${p}x ${format.currency(b.parcelas[p - 1]?.valorDaParcela) || '-'}`}</td>
                      ))
                    }
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
