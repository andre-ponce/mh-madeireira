import React, { useContext } from 'react';
import Link from 'next/link';
import GlobalDataContext from '@/contexts/GlobalDataContext';
import { format, linkTo } from '@/helpers';
import HelpInfo from './HelpInfo';
import UserTag from '../UserTag/UserTag';
import { CartIcon } from '../CartResume/CartIcon';
import { RemoteImage } from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { url } from '@/services/statics.service';

function Topbar({ openMenuMobile }) {
  const {
    institucional: {
      emailAtendimento,
      nomeFantasia,
      telefone,
      whatsapp,
      anoDaFundacao,
    },
    site: {
      logoFileName,
    },
  } = useContext(GlobalDataContext);

  const televendas = telefone || whatsapp;

  return (
    <div className="topbar__top">
      <div className="app-container d-flex justify-content-between align-items-center">

        <button className="navbar-toggler" type="button" onClick={openMenuMobile}>
          <FontAwesomeIcon icon="fa-bars" />
        </button>

        <Link href="/" passHref>
          <a href className="logo">
            {/* <RemoteImage src={url.imageLayout(logoFileName)} width="200" height="50" /> */}
            <img className="logo__img" src={url.imageLayout(logoFileName)} alt={`${nomeFantasia} Logo`} />
            <h1 className="d-none">{nomeFantasia}</h1>
          </a>
        </Link>

        <span>
          <strong>
            <a className='topbar--contact' href={linkTo.mailto(emailAtendimento)}>{emailAtendimento}</a>
          </strong>
        </span>

        <span>
          Televendas:
          {' '}
          <a className='topbar--contact' href={linkTo.tel(televendas)}>{format.telephone(televendas)}</a>
        </span>

        <HelpInfo
          emailAtendimento={emailAtendimento}
          telefone={format.telephone(telefone)}
          whatsapp={format.telephone(whatsapp)}
        />
        <UserTag />
        <CartIcon />
      </div>
    </div>
  );
}

export default Topbar;
