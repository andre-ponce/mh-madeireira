import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

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
        <div className={styles.overlay} onClick={() => close()}>
          <div className={styles.container}>
            {children}
          </div>
        </div>
      ),
      el,
    );
}

export function FloatBox({
  children,
  className,
  canClose,
  handleHide,
  title,
}) {
  return (
    <Modal handleHide={handleHide}>
      <div className={`${styles.box} ${className}`} onClick={(e) => e.stopPropagation()}>
        {
          canClose
          && (
            <button type="button" className={styles.close} onClick={handleHide}>
              <i className="fa-solid fa-times" />
            </button>
          )
        }
        {title && <div className="title">{title}</div>}
        <div>
          {children}
        </div>
      </div>
    </Modal>
  );
}
