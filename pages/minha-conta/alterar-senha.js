import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { ChangePasswordForm } from '@/components/SignupForm/ChangePasswordForm';

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
      <ChangePasswordForm user={user} />
    </Layout>
  );
}
