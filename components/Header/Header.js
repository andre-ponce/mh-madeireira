import React, { useEffect, useState } from 'react';
import Topbar from '../TopBar';
import Menu from '../Menu';
import SearchBar from './SearchBar';
import TopbarFixed from './TopbarFixed';
import useFixedShadow from '../../hooks/useFixedShadow'

function Header() {
  const [isTopFixed, setIsTopFixed] = useState(false);
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [isMenuMobileActive, setIsMenuMobileActive] = useState();
  const { addShadow, popShadow } = useFixedShadow();

  useEffect(() => {
    function toogleFixed() {
      const shouldBeFixed = window.innerWidth > 1000 && window.scrollY > 0;
      setIsTopFixed(shouldBeFixed);
    }
    window.addEventListener('scroll', toogleFixed);
    return () => {
      window.removeEventListener('scroll', toogleFixed);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuFixed(!isMenuFixed);
  }

  const toggleMenuMobile = (state) => {
    setIsMenuMobileActive(state);
    state ? addShadow() : popShadow();
  }

  return (
    <header className="header">
      <div className="header__topbar">
        <Topbar openMenuMobile={() => toggleMenuMobile(true)} />
        <SearchBar />
      </div>
      <TopbarFixed isFixed={isTopFixed} toggleMenu={toggleMenu} />
      <Menu isFixed={isTopFixed && isMenuFixed} isMenuMobileActive={isMenuMobileActive} closeMenuMobile={() => toggleMenuMobile(false)} />
    </header>
  );
}

export default Header;
