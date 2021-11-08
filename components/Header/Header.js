import React from 'react';
import Topbar from './Topbar';
import Menu from './Menu';
import TopbarFixed from './TopbarFixed';

function Header() {
  return (
    <header className="header">
      <Topbar />
      <TopbarFixed />
      <Menu />
    </header>
  );
}

export default Header;
