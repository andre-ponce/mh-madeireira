import useInsecureRawScript from '../../hooks/useInsecureRawScript'

import InstitutionalMain from '../../components/InstitutionalMain';
import InstitutionalSeo from '../../components/InstitutionalMain/InstitutionalSeo';
import Layout from '../../components/Layout';
import { getInstitutionalPage } from '../../services/institutional.service';
import { getGlobalData } from '../../services/dados-globais.service';

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

  const global = await getGlobalData();
  const { slug } = context.query;
  const page = await getInstitutionalPage(slug);
  if (page.notFound) {
    return {
      notFound: true,
    };
  }

  return {
    props: { global, page },
  };
}

export default Institutional
