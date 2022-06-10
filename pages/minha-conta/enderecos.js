import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { getAddresses } from '@/server/api/user.api';

export const getServerSideProps = withAuthorization(async (ctx) => {
  const { user } = ctx;
  const global = await getGlobalData();
  const addresses = await getAddresses(user.id);
  return {
    props: {
      user,
      global,
      addresses,
    },
  };
});

export default function ClientAddresses({ user, addresses, global }) {
  return (
    <Layout secureArea globalData={global}>
      <p>{user.nome}</p>
      {
        addresses.map((address) => (
          <div key={address.id}>
            <h2>{address.rua}</h2>
          </div>
        ))
      }
    </Layout>
  );
}
