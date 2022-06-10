import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';

export const getServerSideProps = withAuthorization(async (ctx) => {
  const { user } = ctx;
  const global = await getGlobalData();
  return {
    props: {
      user,
      global,
    },
  };
});

export default function ChangePassword({ user, global }) {
  return (
    <Layout secureArea globalData={global}>
      <p>Nova senha</p>
    </Layout>
  );
}
