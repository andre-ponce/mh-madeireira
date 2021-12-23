import React from 'react';

export function ButtonCloseMenuMobile({ close }) {
  return (
    <button className="navbar-toggler" type="button" onClick={close}>
      <img src="/images/icons-menu/close-menu.png" alt="menu" />
    </button>
  );
}
