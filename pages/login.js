import Layout from '@/components/Layout';
import LoginMain from '@/components/Login/LoginMain';
import { getGlobalData } from '@/server/api/global.api';

export async function getServerSideProps({ param }) {
  let returnUrl = '/';
  if (param && param.returnUrl) {
    returnUrl = param.returnUrl;
  }

  const global = await getGlobalData();
  return {
    props: { global, returnUrl },
  };
}

function Login({ global, returnUrl }) {
  return (
    <Layout globalData={global} secureArea>
      <LoginMain returnUrl={returnUrl} />
    </Layout>
  );
}

export default Login;
