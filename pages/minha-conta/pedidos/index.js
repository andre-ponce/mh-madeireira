import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { useEffect, useState } from 'react';
import { getOrders } from '@/services/orders.service';
import { MyOrdersMain } from '@/components/Orders/MyOrdersMain';

export const getServerSideProps = withAuthorization(async () => {
  const [global] = await getGlobalData();
  return {
    props: { global },
  };
});

export default function MyOrders({ global }) {
  const [orders, setOrders] = useState([]);

  async function loadData() {
    const data = await getOrders();
    if (!data?.fail) {
      setOrders(data);
    }
  }

  useEffect(() => loadData(), []);

  return (
    <Layout secureArea globalData={global}>
      <MyOrdersMain orders={orders} />
    </Layout>
  );
}
