import { GlobalDataProvider } from '@/contexts/GlobalDataContext';
import { SessionProvider } from '@/contexts/SessionContext';
import { UserLoggedProvider } from '@/contexts/UserLoggedContext';
import useAnimateOnRouteChange from '@/hooks/useAnimateOnRouteChange';
import { useCart } from '@/hooks/useCart';
import { registerDynamicScript } from '@/hooks/registerDynamicScript';
import { useClientInfo } from '@/hooks/useClientInfo';
import { PublicArea } from './PublicArea';
import { SecureArea } from './SecureArea';
import { CartSideBar } from '../CartResume/CartSideBar';

export function Layout({ children, globalData, secureArea }) {
  if (!globalData) {
    throw new Error('globalData is missing');
  }

  const Area = secureArea ? SecureArea : PublicArea;
  const [cart, cartLoading, cartErrors] = useCart();
  const user = useClientInfo();
  useAnimateOnRouteChange();
  registerDynamicScript(globalData.site);

  return (
    <GlobalDataProvider value={globalData}>
      <UserLoggedProvider value={user}>
        <SessionProvider value={{ ...cart, loading: cartLoading, error: cartErrors }}>
          <Area globalData={globalData}>
            {children}
          </Area>
          <CartSideBar />
        </SessionProvider>
      </UserLoggedProvider>
    </GlobalDataProvider>
  );
}
