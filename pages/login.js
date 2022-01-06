import Layout from '../components/Layout'
import LoginMain from '../components/Login/LoginMain';
import { getGlobalData } from '../services/dados-globais.service';

export async function getStaticProps() {
  const global = await getGlobalData();
  return {
    props: { global },
    revalidate: 1,
  };
};

function Login({ global }) {
  return (
    <Layout globalData={global} secureArea>
      <LoginMain />
    </Layout>
  )
}

export default Login;
