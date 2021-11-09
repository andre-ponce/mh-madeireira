import React, { useContext } from 'react';
import GlobalDataContext from '../../contexts/GlobalDataContext';
import { format } from '../../helpers';
import CartResume from '../CartResume';
import HelpInfo from '../TopBar/HelpInfo';
import UserInfo from '../TopBar/UserInfo';

function TopbarFixed() {
  const {
    institucional: {
      telefone,
      whatsapp,
      emailAtendimento
    }
  } = useContext(GlobalDataContext)

  return (
    <div className="header__topbar--fixed d-none">
      <div className="container_serie-ds d-flex justify-content-between align-items-center">
        <a href="index.html" className="logo">
          <img className="logo__img" src="/images/logo_img.png" alt="Braskape Logo" />
          <img className="logo__text" src="/images/logo_text.svg" alt="Braskape" />
        </a>

        <button className="topbar--fixed__menu" data-toggle="collapse" data-target="#header__menu" aria-controls="header__menu" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars menu-icon" />
        </button>

        <form className="form-search d-flex">
          <input type="text" className="input-text" placeholder="Digite o que busca ou o código original da peça" />
          <button className="yellow-button">
            <i className="far fa-search" />
          </button>
        </form>

        <HelpInfo
          telefone={format.telephone(telefone)}
          whatsapp={format.telephone(whatsapp)}
          emailAtendimento={emailAtendimento}
        />
        <UserInfo />
        <CartResume />
      </div>
    </div>
  );
}

export default TopbarFixed;
