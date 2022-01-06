import GlobalDataContext from '../../contexts/GlobalDataContext';
import SessionContext from '../../contexts/SessionContext';
import UserLoggedContext from '../../contexts/UserLoggedContext';
import useAnimateOnRouteChange from '../../hooks/useAnimateOnRouteChange';
import useInsecureRawScript from '../../hooks/useInsecureRawScript';
import { useCart } from '../../hooks/useCart';
import { PublicArea } from './PublicArea';
import { SecureArea } from './SecureArea';

export function Layout({ children, globalData, secureArea }) {
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

  const Area = secureArea ? SecureArea : PublicArea;

  return (
    <GlobalDataContext.Provider value={globalData}>
      <UserLoggedContext.Provider value={{ loggedIn: false }}>
        <SessionContext.Provider value={cart}>
          <Area globalData={globalData}>
            {children}
          </Area>
        </SessionContext.Provider>
      </UserLoggedContext.Provider>
    </GlobalDataContext.Provider>
  );
}


