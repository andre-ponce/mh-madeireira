import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ children, handleHide }) {
  const [domReady, setDomReady] = React.useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  if (!domReady) {
    return <></>;
  }

  const el = document.getElementById('modal-container');

  if (!el) {
    return <></>;
  }

  function close() {
    if (handleHide && typeof handleHide === 'function') {
      handleHide();
    }
  }

  return ReactDOM
    .createPortal(
      (
        <div className="overlay" style={{ display: 'block' }} onClick={() => close()}>
          {children}
        </div>
      ),
      el,
    );
}

export function FloatBox({ children, canClose, handleHide, title }) {
  return (
    <Modal handleHide={handleHide}>
      <div className="float-box" onClick={(e) => e.stopPropagation()}>
        {canClose && <a href className="close" onClick={handleHide}><i className="fa-solid fa-times" /></a>}
        {title && <div className="title">{title}</div>}
        <div className="float-box__content">
          {children}
        </div>
      </div>
    </Modal>
  );
}
