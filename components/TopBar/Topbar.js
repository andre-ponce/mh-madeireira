import React, { useContext } from 'react';
import Link from 'next/link'

import GlobalDataContext from '../../contexts/GlobalDataContext';
import CartResume from '../CartResume';
import HelpInfo from './HelpInfo';
import UserTag from '../UserTag/UserTag';
import { format } from '../../helpers'

function Topbar({ openMenuMobile }) {

  const {
    institucional: {
      emailAtendimento,
      nomeFantasia,
      telefone,
      whatsapp,
      anoDaFundacao
    }
  } = useContext(GlobalDataContext);

  return (
    <div className="topbar__top">
      <div className="container_serie-ds d-flex justify-content-between align-items-center">

        <button className="navbar-toggler" type="button" onClick={openMenuMobile}>
          <i className="fas fa-bars menu-icon" />
        </button>

        <Link href="/" passHref>
          <a className="logo">
            <img className="logo__img" src="/images/logo_img.png" alt={`${nomeFantasia} Logo`} />
            <img className="logo__text" src="/images/logo_text.svg" alt={nomeFantasia} />
            <h1 className="d-none">{nomeFantasia}</h1>
          </a>
        </Link>

        {anoDaFundacao &&
          <span className="topbar__top">
            Varejista de peças automotivas
            {' '}
            <strong className="txt-yellow">desde {anoDaFundacao}</strong>
          </span>
        }

        <span className="topbar__top">
          <strong>
            <a className="txt-yellow" href={`mailto:${emailAtendimento}`}>{emailAtendimento}</a>
          </strong>
        </span>

        <span className="topbar__top">
          Televendas:
          {' '}
          <strong className="txt-yellow">{format.telephone(telefone)}</strong>
        </span>

        <HelpInfo
          emailAtendimento={emailAtendimento}
          telefone={format.telephone(telefone)}
          whatsapp={format.telephone(whatsapp)}
        />
        <UserTag />
        <CartResume />
      </div>
    </div>
  );
}

export default Topbar;
