import Footer from '../Footer';
import { SecureAreaHeader } from '../Header';

export function SecureArea({ children, globalData }) {
  return (
    <>
      <SecureAreaHeader />
      {children}
      <Footer pages={globalData.paginas} hideNewsletter />
    </>
  );
}
