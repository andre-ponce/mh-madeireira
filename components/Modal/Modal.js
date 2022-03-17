import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children, handleHide }) {
  const el = document.getElementById('modal-container');

  if (!el) {
    return <></>;
  }

  return ReactDOM
    .createPortal(
      (
        <div className="overlay" style={{ display: 'block' }} onClick={() => handleHide()}>
          {children}
        </div>
      ),
      el,
    );
}

export default Modal;
