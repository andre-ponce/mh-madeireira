import Head from 'next/head';

import InstitutionalMain from '../../components/InstitutionalMain';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import useInsecureRawScript from '../../hooks/useInsecureRawScript'

function Institutional ({ global, page }) {
  if (page.scripts) {
    useInsecureRawScript(page.scripts);
  }

  const {
    static: {
      urlBaseEstaticos,
      diretorioCategorias,
    },
    seo: {
      sulfixoDoTitulo
    },
    menu,
  } = global;

  const categories = {
    staticUrl: `${urlBaseEstaticos}${diretorioCategorias}/`,
    menu,
  };

  return (
    <>
      <Head>
        <title>{page.titulo} {sulfixoDoTitulo}</title>
      </Head>
      <Header categories={categories} />
      <InstitutionalMain titulo={page.titulo} conteudo={page.conteudo} />
      <Footer />
    </>
  )

}

export async function getServerSideProps(context) {
  const response = await fetch(process.env.API_DADOS_GLOBAIS_HOST, {
    headers: {
      authorization: process.env.API_DADOS_GLOBAIS_TOKEN,
    },
  });

  const data = await response.json();

  const { slug } = context.query;
  const pageRes = await fetch(`https://api-catalogo.maximaweb.com.br/institucional/${slug}`, {
    headers: {
      authorization: process.env.API_DADOS_GLOBAIS_TOKEN,
    },
  });
  
  const page = await pageRes.json();
  
  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: { global: data, page },
  };
}

export default Institutional