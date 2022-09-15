import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';

export async function getStaticProps({ param }) {
  let returnUrl = '';
  if (param && param.returnUrl) {
    returnUrl = param.returnUrl;
  }

  const [global] = await getGlobalData();
  return {
    props: { global, returnUrl },
    revalidate: 1,
  };
}

function RecoveryAccount({ global, returnUrl }) {
  return (
    <Layout globalData={global} secureArea>
      <p>Opa</p>
      <span>{returnUrl}</span>
    </Layout>
  );
}

export default RecoveryAccount;
