import { OrderListItem } from './OrderListItem';

export function MyOrdersMain({ orders }) {
  return (
    <>
      <main className="main-pedidos app-container d-flex row">
        <h2 className="page-title">Seus Pedidos</h2>
        <div className="main__center">
          {orders.map((order) => <OrderListItem order={order} />)}
        </div>
      </main>
    </>
  );
}
