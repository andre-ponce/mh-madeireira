import { format } from '../../helpers';

function Info({ document }) {
  const currentYear = new Date().getFullYear();
  const formated = format.nationalDocument(document, true);

  return (
    <div className="footer__company-infos container_serie-ds">
      <div className="company-infos__desenvolvimento">
        <span>Desenvolvimento:</span>
        <div className="desenvolvimento__logos">
          <a href="http://www.maximaecommerce.com.br/" target="_blank" rel="noreferrer">
            <img src="/images/braskape_logo-maxima.png" alt="Máxima agência e-commerce" />
          </a>
          <a href="https://seriedesign.com.br/" target="_blank" rel="noreferrer">
            <img src="/images/braskape_logo-serie.png" alt="Série Design" />
          </a>
        </div>
      </div>
      <div className="company-infos__dados">
        <span>{`Copyright © ${currentYear} Braskape`}</span>
        {formated && <span>{formated}</span>}
        <span>Todos os direitos reservados.</span>
      </div>
    </div>
  );
}

export default Info;
