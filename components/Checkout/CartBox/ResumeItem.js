import { format, image } from '@/helpers';
import Image from 'next/image';

export function ResumeItem({
  nome, foto, precoUnitario, sku, codigoErp, quantidade,
}) {
  return (
    <div className="checkout-resume--item">
      <div className="resume-item--description">
        <Image src={`https://www.braskape.com.br/imagens_produtos/${image.fallback(foto)}`} width={70} height={70} alt={`Foto do produto ${nome}`} />
        <div className="resume-item--info">
          <span className="resume-item--name">{nome}</span>
          <div className="resume-item--references">
            {sku && <span>{`Ref: ${sku}`}</span>}
            {
              // codigoErp
              // && codigoErp !== sku
              // &&
              <span>{`Cod: ${codigoErp}`}</span>
            }
          </div>
        </div>
      </div>
      <div className="resume-item--details">
        <span className="resume-item--quantity">{`Quantidade: ${quantidade}`}</span>
        <span className="resume-item--price">{format.currency(precoUnitario)}</span>
      </div>
    </div>
  );
}
