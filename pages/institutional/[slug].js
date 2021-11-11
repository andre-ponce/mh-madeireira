import useInsecureRawScript from '../../hooks/useInsecureRawScript'

import InstitutionalMain from '../../components/InstitutionalMain';
import InstitutionalSeo from '../../components/InstitutionalMain/InstitutionalSeo';
import Layout from '../../components/Layout';

function Institutional({ global, page }) {
  if (page.scripts) {
    useInsecureRawScript(page.scripts);
  }

  return (
    <>
      <Layout globalData={global}>
        <InstitutionalSeo {...page} />
        <InstitutionalMain titulo={page.titulo} conteudo={page.conteudo} />
      </Layout>
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

  if (pageRes.status == 404) {
    return {
      notFound: true,
    };
  }

  const page = await pageRes.json();

  return {
    props: { global: data, page },
  };
}

export default Institutional
