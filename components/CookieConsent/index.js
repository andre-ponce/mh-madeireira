import { useEffect } from 'react';
import { cookieConsentConfig } from './config';

export default function CookieConsent() {
  useEffect(() => {
    const cc = window.initCookieConsent();
    cc.run(cookieConsentConfig);
  }, []);
  return <></>;
}
