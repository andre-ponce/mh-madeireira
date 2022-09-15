import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';

export async function getStaticProps() {
  const [global] = await getGlobalData();
  return { props: { global }, revalidate: 1 };
}

function PageNotFound({ global }) {
  return (
    <Layout globalData={global}>
      <h2 className="text-center m-5">
        Á página que você está tentendo acessar não existe,
        <wbr />
        {' '}
        ou foi movida para outro endereço.
      </h2>
    </Layout>
  );
}

export default PageNotFound;
