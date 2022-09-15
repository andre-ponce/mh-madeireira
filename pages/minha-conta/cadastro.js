import SignupForm from '@/components/SignupForm/SignupForm';
import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { getUserInfo } from '@/server/api/user.api';
import { useRouter } from 'next/router';
import { linkTo } from '@/helpers';

export const getServerSideProps = withAuthorization(async (ctx) => {
  const { session } = ctx;
  const [user] = await getUserInfo(session);
  const [global] = await getGlobalData();
  return {
    props: {
      user,
      global,
    },
  };
});

export default function ClientDetails({ user, global }) {
  const router = useRouter();

  async function saveChanges(values) {
    const res = await fetch('/api/clients', {
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(values),
      method: 'PUT',
    });

    const result = await res.json();

    if (result.sucesso) {
      router.push(linkTo.account());
    }
  }

  return (
    <Layout secureArea globalData={global}>
      <SignupForm user={user} onSubmit={saveChanges} />
    </Layout>
  );
}
