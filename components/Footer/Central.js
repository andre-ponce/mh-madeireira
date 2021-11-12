import React from 'react';
import Link from 'next/link';

function Central({pages}) {
  return (
    <div className="footer__footer-central">
      <div className="container_serie-ds">
        <div className="footer-central__institucional">
          <h2>INSTITUCIONAL</h2>
          {pages.map(p =>(
            <Link href={`/institutional/${p.slug}`} passHref>
              <a className="mg-b-5">
                {p.titulo}
              </a>
            </Link>
          ))}
        </div>
        <div className="footer-central__atendimento">
          <h2>ATENDIMENTO</h2>
          <span>(11) 5180-1690</span>
          <span>
            Para tirar dúvidas ou comprar acesse nosso chat ou ligue de segunda
            à sexta das 8:00 às 18:00.
          </span>
          <span>sac@braskape.com.br</span>
          <div className="atendimento__social-medias">
            <a href="https://www.facebook.com/braskape">
              <img src="/images/facebook.svg" alt="facebook" />
            </a>

            <a href="https://www.instagram.com/_braskape/">
              <img src="/images/instagram.svg" alt="instagram" />
            </a>

            <a href="https://www.instagram.com/_braskape/">
              <img src="/images/youtube.svg" alt="youtube" />
            </a>
          </div>
        </div>
        <div className="footer-central__pagamentos-envios">
          <div className="pagamentos-envios__pagamentos">
            <h2>FORMAS DE PAGAMENTO</h2>
            <div>
              <img src="/images/braskape-formas-pagamento-visa.jpg" alt="facebook" />
              <img src="/images/braskape-formas-pagamento-mastercard.jpg" alt="instagram" />
              <img src="/images/braskape-formas-pagamento-dinners.jpg" alt="youtube" />
              <img src="/images/braskape-formas-pagamento-american-express.jpg" alt="youtube" />
            </div>
          </div>

          <div className="pagamentos-envios__envios">
            <h2>FORMAS DE ENVIO</h2>
            <div>
              <img src="/images/braskape-formas-de-envio-pac.jpg" alt="facebook" />
              <img src="/images/braskape-formas-de-envio-sedex.jpg" alt="instagram" />
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
