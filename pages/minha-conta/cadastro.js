import SignupForm from '@/components/SignupForm/SignupForm';
import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { getUserInfo } from '@/server/api/user.api';
import { useRouter } from 'next/router';
import { cookie as CONSTANT } from '@/server/constants/cookies';
import { linkTo } from '@/helpers';

const { session: { COOKIE_NAME } } = CONSTANT;

export const getServerSideProps = withAuthorization(async (ctx) => {
  const { req: { cookies } } = ctx;
  const sessionToken = cookies[COOKIE_NAME];
  const user = await getUserInfo(sessionToken);
  console.log(user);
  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const global = await getGlobalData();
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
