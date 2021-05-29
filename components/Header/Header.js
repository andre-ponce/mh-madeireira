import React from 'react';
import Topbar from './Topbar';
import Menu from './Menu';
import TopbarFixed from './TopbarFixed';

function Header({ categories }) {
  return (
    <header className="header">
      <Topbar />
      <TopbarFixed />
      <Menu categories={categories} />
    </header>
  );
}

export default Header;
