import { useEffect, useState } from "react"

export default function useFixedShadow() {
  const [useCount, setUseCount] = useState(0);

  useEffect(() => {
    useCount > 0
      ? document.body.classList.add('mobile_shadow--active')
      : document.body.classList.remove('mobile_shadow--active');
  }, [useCount]);

  return {
    addShadow: () => setUseCount(useCount + 1),
    popShadow: () => useCount > 0 && setUseCount(useCount - 1),
  }
}
