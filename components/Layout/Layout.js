import GlobalDataContext from '../../contexts/GlobalDataContext'
import Header from '../Header'
import Footer from '../Footer'

export function Layout({ children, globalData }) {
  

  return (
    <GlobalDataContext.Provider value={globalData}>
      <Header />
      {children}
      <Footer />
    </GlobalDataContext.Provider>
  )
}