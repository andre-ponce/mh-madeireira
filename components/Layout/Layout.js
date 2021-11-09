import GlobalDataContext from '../../contexts/GlobalDataContext'
import Header from '../Header'
import Footer from '../Footer'
import UserLoggedContext from '../../contexts/UserLoggedContext'

export function Layout({ children, globalData }) {
  return (
    <GlobalDataContext.Provider value={globalData}>
      <UserLoggedContext.Provider value={{loggedIn: false}}>
        <Header />
        {children}
        <Footer />
      </UserLoggedContext.Provider>
    </GlobalDataContext.Provider>
  )
}
