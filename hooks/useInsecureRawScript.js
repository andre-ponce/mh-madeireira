import { useEffect } from 'react';

const useInsecureRawScript = (content) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.innerText = content;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [content]);
};

export default useInsecureRawScript;
