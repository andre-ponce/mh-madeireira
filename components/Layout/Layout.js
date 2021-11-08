import Header from '../Header'
import Footer from '../Footer'

export function Layout({ children, globalData }) {
  
  const {
    static: {
      urlBaseEstaticos,
      diretorioCategorias,
    },
    menu,
  } = globalData;

  const categories = {
    staticUrl: `${urlBaseEstaticos}${diretorioCategorias}/`,
    menu,
  };

  return (
    <>
      <Header categories={categories} />
      {children}
      <Footer />
    </>
  )
}