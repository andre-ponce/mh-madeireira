import GlobalDataContext from '../../contexts/GlobalDataContext'
import Header from '../Header'
import Footer from '../Footer'
import UserLoggedContext from '../../contexts/UserLoggedContext'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function Layout({ children, globalData }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    }

    const handleStop = () => {
      setIsLoading(false);
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }
  }, [router])

  return (
    <GlobalDataContext.Provider value={globalData}>
      <UserLoggedContext.Provider value={{loggedIn: false}}>
        {isLoading && <Loading />}
        <Header />
        {children}
        <Footer pages={globalData.paginas} />
      </UserLoggedContext.Provider>
    </GlobalDataContext.Provider>
  )
}

function Loading () {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      zIndex: '9999',
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      cursor: 'progress'
    }}>
    </div>
  )
}
