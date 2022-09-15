import Layout from '@/components/Layout';
import SignupForm from '@/components/SignupForm/SignupForm';
import { getGlobalData } from '@/server/api/global.api';
import { useRouter } from 'next/router';
import { linkTo } from '@/helpers';

export async function getServerSideProps({ query }) {
  const { returnUrl, email, name } = query;
  const [global] = await getGlobalData();
  return {
    props: {
      global,
      returnUrl: returnUrl || '',
      user: {
        email: email || '',
        nome: name || '',
      },
    },
  };
}

function Signup({ global, user, returnUrl }) {
  const router = useRouter();

  async function post(values) {
    const res = await fetch('/api/clients', {
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(values),
      method: 'POST',
    });

    const result = await res.json();

    if (result.sucesso) {
      router.push({
        pathname: linkTo.login(),
        query: { returnUrl },
      });
    }

    return result;
  }

  return (
    <Layout globalData={global} secureArea>
      <SignupForm user={user} onSubmit={post} />
    </Layout>
  );
}

export default Signup;
