import React from 'react';

export function ButtonCloseMenuMobile({ close }) {
  return (
    <button className="navbar-toggler" type="button" onClick={close}>
      <i className="fa-solid fa-times" />
    </button>
  );
}
