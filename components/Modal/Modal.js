import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  const el = document.getElementById('modal-container');

  if (!el) {
    return <></>;
  }

  return ReactDOM
    .createPortal(
      (
        <div className="overlay" style={{ display: 'block' }} onClick={() => hideHandle()}>
          {children}
        </div>
      )
      , el);
}

export default Modal;
