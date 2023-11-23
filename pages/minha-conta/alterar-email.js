import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { ChangeEmailForm } from '@/components/SignupForm/ChangeEmailForm';

export const getServerSideProps = withAuthorization(async (ctx) => {
  const { user } = ctx;
  const [global] = await getGlobalData();
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
      <ChangeEmailForm user={user} />
    </Layout>
  );
}
