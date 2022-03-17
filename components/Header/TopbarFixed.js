import React, { useContext } from 'react';
import GlobalDataContext from '../../contexts/GlobalDataContext';
import { format } from '../../helpers';
import CartResume from '../CartResume';
import HelpInfo from '../TopBar/HelpInfo';
import UserTag from '../UserTag/UserTag';

function TopbarFixed({ isFixed, toggleMenu }) {
  const {
    institucional: {
      telefone,
      whatsapp,
      emailAtendimento,
    },
  } = useContext(GlobalDataContext);

  return (
    <div className={`header__topbar--fixed ${isFixed ? 'fixed' : 'd-none'}`}>
      <div className="container_serie-ds d-flex justify-content-between align-items-center">
        <a href="index.html" className="logo">
          <img className="logo__img" src="/images/logo_img.png" alt="Braskape Logo" />
          <img className="logo__text" src="/images/logo_text.svg" alt="Braskape" />
        </a>

        <button type="button" className="topbar--fixed__menu" onClick={toggleMenu}>
          <i className="fas fa-bars menu-icon" />
        </button>

        <form className="form-search d-flex">
          <input type="text" className="input-text" placeholder="Digite o que busca ou o código original da peça" />
          <button type="button" className="yellow-button">
            <i className="far fa-search" />
          </button>
        </form>

        <HelpInfo
          telefone={format.telephone(telefone)}
          whatsapp={format.telephone(whatsapp)}
          emailAtendimento={emailAtendimento}
        />
        <UserTag />
        <CartResume />
      </div>
    </div>
  );
}

export default TopbarFixed;
