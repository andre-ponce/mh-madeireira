import AOS from "aos";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

export default function useAnimateOnRouteChange() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      const aosElements = document.querySelectorAll('[data-aos]');
      aosElements.forEach(el => {
        el.classList.remove('aos-init');
        el.classList.remove('aos-animate');
      })
    }

    const handleStop = () => {
      setIsLoading(false);
      AOS.refresh(true);
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    AOS.init();

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }
  }, [router]);

  return isLoading ? Loading : () => <></>;
}

function Loading() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      zIndex: '9999',
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      cursor: 'progress'
    }}>
    </div>
  )
}
