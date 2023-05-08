import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import GlobalDataContext from '@/contexts/GlobalDataContext';
import { format } from '@/helpers';
import { CartIcon } from '../CartResume/CartIcon';
import HelpInfo from '../TopBar/HelpInfo';
import UserTag from '../UserTag/UserTag';
import Link from 'next/link';

function TopbarFixed({ isFixed, toggleMenu }) {
  const {
    institucional: {
      telefone,
      whatsapp,
      emailAtendimento,
    },
  } = useContext(GlobalDataContext);

  const router = useRouter();
  const [search, setSearch] = useState('');

  async function doSearch(ev) {
    ev.preventDefault();
    if (!search) return;
    await router.push({
      pathname: '/busca',
      query: { q: search },
    });
  }

  return (
    <div className={`header__topbar--fixed ${isFixed ? 'fixed' : 'd-none'}`}>
      <div className="app-container d-flex justify-content-between align-items-center">
        <Link href="/" passHref>
          <a href className="logo">
            <img className="logo__img" src="/images/logo_img--fixed.png" alt="Logo" />
          </a>
        </Link>

        <button type="button" className="topbar--fixed__menu" onClick={toggleMenu}>
          <i className="fa-solid fa-bars menu-icon" />
        </button>

        <form className="form-search d-flex" onSubmit={doSearch}>
          <input
            value={search}
            required
            onChange={(ev) => setSearch(ev.target.value)}
            type="search"
            className="input-text"
            placeholder="Digite o que busca ou o código original da peça"
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>

        <HelpInfo
          telefone={format.telephone(telefone)}
          whatsapp={format.telephone(whatsapp)}
          emailAtendimento={emailAtendimento}
        />
        <UserTag />
        <CartIcon />
      </div >
    </div >
  );
}

export default TopbarFixed;
