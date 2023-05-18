import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ButtonCloseMenuMobile({ close }) {
  return (
    <button className="navbar-toggler" type="button" onClick={close}>
      <FontAwesomeIcon icon="fa-times" />
    </button>
  );
}
