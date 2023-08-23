import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export function GoToTopButton() {
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    const scrollHandle = () => {
      const shouldBeVisible = window.scrollY > 100;
      setVisibility(shouldBeVisible);
    };

    document.addEventListener('scroll', scrollHandle);
    return () => document.removeEventListener('scroll', scrollHandle);
  }, []);

  return (
    <button
      title="Navegar para o topo da página"
      className={`navigate-to-top ${visible ? 'visible' : ''}`}
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <FontAwesomeIcon icon="fa-solid fa-angle-up" />
    </button>
  );
}
