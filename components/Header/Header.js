import React from 'react';
import { isMobile } from 'react-device-detect';
import BannerFull from './BannerFull';
import BannerMobile from './BannerMobile';
import BannerRuler from './BannerRuler';
import Topbar from './Topbar';
import Menu from './Menu';
import TopbarFixed from './TopbarFixed';

function Header({ categories }) {
  return (
    <header className="header">
      <Topbar />
      <TopbarFixed />
      <Menu categories={categories} />
      {isMobile
        ? <BannerMobile />
        : <BannerFull />}
      <BannerRuler />
    </header>
  );
}

export default Header;
