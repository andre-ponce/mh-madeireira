import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';

export async function getStaticProps() {
  const global = await getGlobalData();
  return { props: { global }, revalidate: 1 };
}

export default function InternalError({ global }) {
  return (
    <Layout globalData={global}>
      <h2 className="text-center m-3">Falha interna! =/</h2>
    </Layout>
  );
}
