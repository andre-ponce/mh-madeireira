import Layout from '@/components/Layout';
import LoginMain from '@/components/Login/LoginMain';
import { getGlobalData } from '@/server/api/global.api';
import { tryAuthorization } from '@/server/lib/withAuthorization';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export async function getServerSideProps(context) {
  const { param } = context;
  let returnUrl = '/';
  if (param && param.returnUrl) {
    returnUrl = param.returnUrl;
  }

  const user = await tryAuthorization(context);

  const global = await getGlobalData();
  return {
    props: { global, returnUrl, user },
  };
}

function Login({ global, user, returnUrl }) {
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace(returnUrl);
    }
  }, [user]);

  return (
    <Layout globalData={global} secureArea>
      <LoginMain returnUrl={returnUrl} />
    </Layout>
  );
}

export default Login;
