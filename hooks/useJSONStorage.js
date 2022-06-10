import { useEffect, useState } from 'react';

export function useJSONStorage(key) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [json, setJson] = useState(() => {
    const data = localStorage.getItem(key);
    let initialValue = null;
    if (data) {
      try {
        initialValue = JSON.parse(data);
      } catch {
        initialValue = null;
      }
    }

    return initialValue;
  });

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (json) {
      try {
        localStorage.setItem(key, JSON.stringify(json));
      } catch (e) {
        setError(e);
      }
    } else {
      localStorage.removeItem(key);
    }

    setLoading(false);
  }, [json]);

  return [
    json,
    loading,
    error,
    setJson,
  ];
}
