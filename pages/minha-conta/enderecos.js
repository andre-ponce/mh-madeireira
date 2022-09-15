import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { getAddress } from '@/server/api/address.api';

export const getServerSideProps = withAuthorization(async (ctx) => {
  const { user, session } = ctx;
  const [global] = await getGlobalData();
  const [addresses] = await getAddress(session);
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
