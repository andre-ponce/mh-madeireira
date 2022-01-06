import Header from '../Header';
import Footer from '../Footer';

export function PublicArea({ children, globalData }) {
  return (
    <>
      <Header />
      {children}
      <Footer pages={globalData.paginas} />
    </>
  );
}
