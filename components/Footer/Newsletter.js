import React from 'react';

function Newsletter() {
  return (
    <div className="footer__newsletter">
      <div className="newsletter__container">
        <div className="newsletter__text">
          <img src="/images/envelope.png" alt="carta" />
          <span>
            Cadastre-se e receba descontos e
            {' '}
            <strong className="txt-yellow">ofertas exclusivas</strong>
          </span>
        </div>
        <form className="newsletter__form">
          <input className="input-text" type="text" placeholder="Nome" />
          <div className="form__inputs">
            <input className="input-text" type="text" placeholder="e-mail" />
            <button className="yellow-button" type="submit">
              <img src="/images/braskape_logo-aviao.png" alt="avião" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
