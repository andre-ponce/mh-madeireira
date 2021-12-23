import GlobalDataContext from '../../contexts/GlobalDataContext'
import Header from '../Header'
import Footer from '../Footer'
import UserLoggedContext from '../../contexts/UserLoggedContext'
import useAnimateOnRouteChange from '../../hooks/useAnimateOnRouteChange'

export function Layout({ children, globalData }) {

  if (!globalData) {
    throw new Error("globalData is missing");
  }

  useAnimateOnRouteChange();

  return (
    <GlobalDataContext.Provider value={globalData}>
      <UserLoggedContext.Provider value={{ loggedIn: false }}>
        <Header />
        {children}
        <Footer pages={globalData.paginas} />
      </UserLoggedContext.Provider>
    </GlobalDataContext.Provider>
  )
}
