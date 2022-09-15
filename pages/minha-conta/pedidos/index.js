import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';

export const getServerSideProps = withAuthorization(async (ctx) => {
  const orders = [];
  const [global] = await getGlobalData();
  return {
    props: {
      orders,
      global,
    },
  };
});

export default function MyOrders({ orders, global }) {
  return (
    <Layout secureArea globalData={global}>
      <MyOrdersMain orders={orders} />
    </Layout>
  );
}

function MyOrdersMain({ orders }) {
  return (
    <>
      <main className="main-order container_serie-ds d-flex row">
        <h2 className="page-title">Seus Pedidos</h2>
        <OrderList orders={orders} />
      </main>
    </>
  );
}

function OrderList({ orders }) {
  return (
    <div className="main__center">
      {
        orders.map((order) => <OrderListItem order={order} />)
      }
    </div>
  );
}

function OrderListItem({ order }) {
  return (
    <>
      <div className="main__single__pedido">
        <div className="cod">mf-22b1422</div>
        <div className="date">05/10/2020 <span>R$129,31</span></div>
        <div className="status">Aguardando confirmação de pagamento</div>
        <div className="button"><a>Detalhes</a></div>
        <div className="change"><a>Refazer pedido</a></div>
      </div>
    </>
  );
}
