import { observe } from '@/helpers/observable';
import { useEffect } from 'react';

export function useOberve(key, fn) {
  useEffect(() => {
    const cancel = observe(key, fn);
    return () => cancel();
  }, []);
}
