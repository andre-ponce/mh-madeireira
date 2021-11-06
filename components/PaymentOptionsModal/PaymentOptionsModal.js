import { useEffect } from "react";

export function PaymentOptionsModal({ hide }) {

  useEffect(() => {
    const ESC_KEY_CODE = 27;

    function keyUp(e) {
      if (e.keyCode == ESC_KEY_CODE) {
        hide();
      }
    }

    window.addEventListener('keyup', keyUp);

    return () => {
      window.removeEventListener('keyup', keyUp);
    };
  }, []);

  return (
    <div className="overlay" style={{ display: 'block' }} onClick={() => hide()}>
      <div className="modal__pedido" onClick={(e) => e.stopPropagation()}>
        <a className="close" onClick={() => hide()}><i className="fal fa-times"></i></a>
        <div className="title">Formas de pagamento</div>
        <div className="modal__forma">
          <a className="modal__forma__item active">Cartão</a>
          <a className="modal__forma__item">Boleto</a>
        </div>
        <div className="modal__block">
          <table>
            <tr>
              <td>1x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>2x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>3x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>4x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>5x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>6x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>7x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>8x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>9x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>10x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>11x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>

            <tr>
              <td>12x</td>
              <td>de R$ 999,99</td>
              <td>sem juros</td>
              <td>total R$ 999,99</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
