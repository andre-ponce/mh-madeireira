import Layout from '@/components/Layout';
import { disconnectUser } from '@/server/api/user.api';
import { cookie as CONSTANT } from '@/server/constants/cookies';

const { session: { COOKIE_NAME } } = CONSTANT;

export async function getServerSideProps(context) {
  const { req: { cookies } } = context;
  const sessionToken = cookies[COOKIE_NAME];
  const { disconnected, httpStatus } = await disconnectUser(sessionToken);

  if (!disconnected) {
    throw new Error(`Falha ao desconectar usuário: status ${httpStatus}`);
  }

  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
    props: {},
  };
}

function Logout({ global }) {
  return (
    <Layout globalData={global} secureArea>
      <></>
    </Layout>
  );
}

export default Logout;
