import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { linkTo } from '@/helpers';

function Central({
  pages,
  informacoesDeAtendimento,
  supportPhone,
  supportEmail,
  facebook,
  instagram,
  youtube,
}) {
  return (
    <div className="footer__footer-central">
      <div className="app-container">
        <div className="footer-central__institucional">
          <h2>INSTITUCIONAL</h2>
          {pages.map((p) => (
            <Link href={linkTo.institutional(p)} passHref key={p.id}>
              <a className="mg-b-5">
                {p.titulo}
              </a>
            </Link>
          ))}
        </div>
        <div className="footer-central__atendimento">
          <h2>ATENDIMENTO</h2>

          {supportPhone && <span><a href={linkTo.tel(supportPhone)}>{supportPhone}</a></span>}

          {informacoesDeAtendimento && <span>{informacoesDeAtendimento}</span>}

          {supportEmail && <span><a href={linkTo.mailto(supportEmail)}>{supportEmail}</a></span>}

          <div className="atendimento__social-medias">
            {
              facebook
              && (
                <a href={facebook}>
                  <FontAwesomeIcon icon="fa-brands fa-facebook" />
                </a>
              )
            }
            {
              instagram
              && (
                <a href={instagram}>
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>
              )
            }
            {
              youtube
              && (
                <a href={youtube}>
                  <FontAwesomeIcon icon="fa-brands fa-youtube" />
                </a>
              )
            }
          </div>
        </div>

        <div className="footer-central__pagamentos-envios">
          <div className="pagamentos-envios__pagamentos">
            <h2>FORMAS DE PAGAMENTO</h2>
            <div>
              <img src="/images/braskape-formas-pagamento-visa.jpg" alt="visa" />
              <img src="/images/braskape-formas-pagamento-mastercard.jpg" alt="mastercard" />
              <img src="/images/braskape-formas-pagamento-dinners.jpg" alt="dinners" />
              <img src="/images/braskape-formas-pagamento-american-express.jpg" alt="american-express" />
            </div>
          </div>

          <div className="pagamentos-envios__envios">
            <h2>FORMAS DE ENVIO</h2>
            <div>
              <img src="/images/braskape-formas-de-envio-pac.jpg" alt="pac" />
              <img src="/images/braskape-formas-de-envio-sedex.jpg" alt="sedex" />
            </div>
          </div>
        </div>
        <div className="footer-central__seals-and-security">
          <h2>SELOS E SEGURANÇA</h2>
          <div>
            <img
              className="seals-and-security__seal"
              src="/images/braskape_selos-internet-segura.png"
              alt="Internet Segura"
            />
            <img
              className="seals-and-security__seal"
              src="/images/braskape_selos-google.png"
              alt="Google Safe Browsing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Central;
