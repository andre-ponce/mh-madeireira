import React, { useContext } from 'react';
import GlobalDataContext from '../../contexts/GlobalDataContext';
import Link from 'next/link'
import CartResume from '../CartResume';

function Topbar() {
  const {
    institucional: {
      emailAtendimento,
      nomeFantasia,
      telefone,
      whatsapp
    }
  } = useContext(GlobalDataContext);

  const telefoneFormatado = (telefone) => {
    const onlyNumbers = telefone.replace(/[^0-9]+/g, '');
    let [full, country, ddd, phone] = /(0?55)?(\d\d)(\d{8,9})/.exec(onlyNumbers);

    if (phone.length > 8) {
      phone.split('')
      phone = `${phone.slice(0, 1)} ${phone.slice(1, 5)}-${phone.slice(5, 9)}`;
    }
    else {
      phone = `${phone.slice(0, 4)}-${phone.slice(4, 8)}`;
    }

    return `(${ddd}) ${phone}`
  }

  return (
    <div className="topbar__top">
      <div className="container_serie-ds d-flex justify-content-between align-items-center">

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#header__menu"
        >
          <i className="fas fa-bars menu-icon" />
        </button>

        <Link href="/" passHref>
          <a className="logo">
            <img className="logo__img" src="/images/logo_img.png" alt={`${nomeFantasia} Logo`} />
            <img className="logo__text" src="/images/logo_text.svg" alt={nomeFantasia} />
            <h1 className="d-none">{nomeFantasia}</h1>
          </a>
        </Link>

        <span className="topbar__top">
          Varejista de peças automotivas
          {' '}
          <strong className="txt-yellow">desde 1978</strong>
        </span>

        <span className="topbar__top"><strong className="txt-yellow">{emailAtendimento}</strong></span>

        <span className="topbar__top">
          Televendas:
          {' '}
          <strong className="txt-yellow">{telefoneFormatado(telefone)}</strong>
        </span>

        <div className="help">
          <img src="/images/help.svg" alt="Ajuda" />
          <span>Ajuda</span>
          <div className="block_hover">
            <span>{emailAtendimento}</span>
            <span>{telefoneFormatado(telefone)}</span>
            <span>{telefoneFormatado(whatsapp)}</span>
          </div>
        </div>

        <div className="login">
          <span className="login__container d-flex align-items-center">
            <img src="/images/login.svg" alt="Login" />
            <div className="d-flex flex-column">
              <span>Olá Fulano</span>
              <span>
                Minha conta
                {' '}
                <i style={{ color: '#545454' }} className="fal fa-chevron-down" />
              </span>
            </div>
          </span>
          <div className="block_hover">
            <Link href="/minha-conta">Minha conta</Link>
            <Link href="/meus-pedidos">Meus pedidos</Link>
            <Link href="/logout">Sair</Link>
          </div>
        </div>

        <CartResume />
      </div>
    </div>
  );
}

export default Topbar;
