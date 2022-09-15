import useInsecureRawScript from '@/hooks/useInsecureRawScript';
import InstitutionalMain from '@/components/InstitutionalMain';
import InstitutionalSeo from '@/components/InstitutionalMain/InstitutionalSeo';
import Layout from '@/components/Layout';
import { getInstitutionalPage } from '@/server/api/institutional.api';
import { getGlobalData } from '@/server/api/global.api';

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
  );
}

export async function getStaticProps({ params }) {
  const [global] = await getGlobalData();
  const [page, status] = await getInstitutionalPage(params.slug);
  if (status.notFound) {
    return { notFound: true, revalidate: 1 };
  }

  return {
    props: { global, page },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default Institutional;
