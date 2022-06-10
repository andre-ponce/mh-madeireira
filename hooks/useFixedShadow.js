import { useEffect, useState } from 'react';

export default function useFixedShadow() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      document.body.classList.add('mobile_shadow--active');
    } else {
      document.body.classList.remove('mobile_shadow--active');
    }
  }, [count]);

  return {
    addShadow: () => setCount(count + 1),
    popShadow: () => count > 0 && setCount(count - 1),
    flush: () => setCount(0),
  };
}
