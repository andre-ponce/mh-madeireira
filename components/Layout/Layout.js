import GlobalDataContext from '../../contexts/GlobalDataContext';
import SessionContext from '../../contexts/SessionContext';
import Header from '../Header';
import Footer from '../Footer';
import UserLoggedContext from '../../contexts/UserLoggedContext';
import useAnimateOnRouteChange from '../../hooks/useAnimateOnRouteChange';
import useInsecureRawScript from '../../hooks/useInsecureRawScript';
import { useCart } from '../../hooks/useCart';

export function Layout({ children, globalData }) {
  if (!globalData) {
    throw new Error('globalData is missing');
  }

  const {
    site: {
      scriptChat,
      scriptGoogleAnalytics,
      scriptsHeaderGlobais,
      scriptsBodyGlobais,
    },
  } = globalData;

  useInsecureRawScript(scriptChat);
  useInsecureRawScript(scriptGoogleAnalytics);
  useInsecureRawScript(scriptsHeaderGlobais);
  useInsecureRawScript(scriptsBodyGlobais);

  useAnimateOnRouteChange();
  const cart = useCart();

  return (
    <GlobalDataContext.Provider value={globalData}>
      <UserLoggedContext.Provider value={{ loggedIn: false }}>
        <SessionContext.Provider value={cart}>
          <Header />
          {children}
          <Footer pages={globalData.paginas} />
        </SessionContext.Provider>
      </UserLoggedContext.Provider>
    </GlobalDataContext.Provider>
  );
}
