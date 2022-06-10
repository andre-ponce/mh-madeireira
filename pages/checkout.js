import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { CheckoutMain } from '@/components/Checkout/CheckoutMain';

export const getServerSideProps = withAuthorization(async () => {
  const global = await getGlobalData();
  return {
    props: {
      global,
    },
  };
});

export default function Checkout({ global }) {
  return (
    <Layout secureArea globalData={global}>
      <CheckoutMain />
    </Layout>
  );
}
