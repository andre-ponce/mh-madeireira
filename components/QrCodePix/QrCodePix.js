import { copy } from 'clipboard';
import { useEffect, useState } from 'react';
import qrCodeBuilder from 'qrcode';
import styled from 'styled-components';

const Wrap = styled.div`
.pagamento {
  width: 100%;
  text-align: center;

  h3 {
    text-transform: uppercase;
    font-weight: bold;
  }

  .confirmacao--action {
    margin-top: 10px;
  }

  .pix {
    &--qrcode {
      background-color: #fff;
      margin: 10px auto;
    }

    &--brcode {
      color: #ccc;
      font-size: 12px;
      margin: 10px auto;
      max-width: 400px;
      display: block;
    }
  }
}`;

export function QrCodePix({ payment }) {
  const [copying, setCopying] = useState(false);
  const [qrCode, setQrCode] = useState(false);

  useEffect(() => {
    qrCodeBuilder.toDataURL(payment.qrCodePixBase64).then((data) => {
      setQrCode(data);
    });
  }, payment.nome);

  function copyBrCode(brCode) {
    if (!copying) {
      setCopying(true);
      setTimeout(() => setCopying(false), 2000);
      copy(brCode);
    }
  }
  return (
    <Wrap>
      <div className="pagamento">
        <h3>Pague seu Pedido:</h3>
        <div className="pix--qrcode">
          <img src={qrCode} alt="qrcode-pix" />
        </div>
        <p>Se preferir, você pode copiar o código e colar no aplicativo do seu banco:</p>
        <button type="button" className="confirmacao--action" onClick={() => copyBrCode(payment.qrCodePixBase64)}>
          {copying ? 'Copiado!' : 'Copiar o código PIX'}
        </button>
        <p className="pix--brcode">{payment.qrCodePixBase64}</p>
      </div>
    </Wrap>
  );
}
