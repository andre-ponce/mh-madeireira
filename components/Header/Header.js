import React from 'react';
import Topbar from '../TopBar';
import Menu from './Menu';
import SearchBar from './SearchBar';
import TopbarFixed from './TopbarFixed';

function Header() {
  return (
    <header className="header">
      <div className="header__topbar">
        <Topbar />
        <SearchBar />
      </div>
      <TopbarFixed />
      <Menu />
    </header>
  );
}

export default Header;
