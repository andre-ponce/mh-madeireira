import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { AccountPage } from '@/components/AccountPage/AccountPage';

export const getServerSideProps = withAuthorization(async (ctx) => {
  const { user } = ctx;
  const global = await getGlobalData();
  return {
    props: {
      user,
      global
    },
  };
});

export default function Account({ user, global }) {
  return (
    <Layout secureArea globalData={global}>
      <AccountPage user={user} />
    </Layout>
  );
}
