import React, { useEffect, useState } from 'react';
import useFixedShadow from '@/hooks/useFixedShadow';
import { useRouter } from 'next/router';
import Topbar from '../TopBar';
import Menu from '../Menu';
import SearchBar from './SearchBar';
import TopbarFixed from './TopbarFixed';

export function Header() {
  const [isTopFixed, setIsTopFixed] = useState(false);
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [isMenuMobileActive, setIsMenuMobileActive] = useState();
  const { addShadow, flush } = useFixedShadow();
  const router = useRouter();

  function toggleMenu() {
    setIsMenuFixed(!isMenuFixed);
  }

  function toggleMenuMobile(state) {
    setIsMenuMobileActive(state);
    const fn = state ? addShadow : flush;
    fn();
  }

  useEffect(() => {
    function toogleFixed() {
      const shouldBeFixed = window.innerWidth > 1000 && window.scrollY > 50;
      setIsTopFixed(shouldBeFixed);
    }
    window.addEventListener('scroll', toogleFixed);

    const closeMenu = () => toggleMenuMobile(false);

    router.events.on('routeChangeComplete', closeMenu);

    return () => {
      window.removeEventListener('scroll', toogleFixed);
      router.events.off('routeChangeComplete', closeMenu);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__topbar">
        <Topbar openMenuMobile={() => toggleMenuMobile(true)} />
        <SearchBar />
      </div>
      <TopbarFixed isFixed={isTopFixed} toggleMenu={toggleMenu} />
      <Menu
        isFixed={isTopFixed && isMenuFixed}
        isMenuMobileActive={isMenuMobileActive}
        closeMenuMobile={() => toggleMenuMobile(false)}
      />
    </header>
  );
}
