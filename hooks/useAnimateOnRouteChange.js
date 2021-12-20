import AOS from "aos";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

export default function useAnimateOnRouteChange() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsRouting(true);
      const aosElements = document.querySelectorAll('[data-aos]');
      aosElements.forEach(el => {
        el.classList.remove('aos-init');
        el.classList.remove('aos-animate');
      })
    }

    const handleStop = () => {
      setIsRouting(false);
      AOS.refresh(true);
    }

    const handleError = () => {
      setIsRouting(false);
      AOS.refresh(true);
    }

    const loadingClass = 'routing';
    const body = document.body;
    const setIsRouting = (isLoading) => {
      setIsLoading(isLoading);
      isLoading
        ? body.classList.add(loadingClass)
        : body.classList.remove(loadingClass);
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleError);

    AOS.init();

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleError);
    }
  }, [router]);

  return isLoading;
}
