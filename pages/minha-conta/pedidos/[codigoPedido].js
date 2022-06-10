import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';

export const getServerSideProps = withAuthorization(async (ctx) => {
  const order = {};
  const global = await getGlobalData();
  return {
    props: {
      order,
      global,
    },
  };
});

export default function OrderDetails({ order, global }) {
  return (
    <Layout secureArea globalData={global}>
      <OrderDetailed order={order} />
    </Layout>
  );
}

function OrderDetailed({ order }) {
  return (
    <>
      <div className="modal__pedido">
        <div className="modal__block">
          <div className="title">Acompanhamento</div>
          <div className="sub">Pedido:</div>
          <div className="text">MF-5AB1281</div>
          <div className="sub">Status:</div>
          <div className="text">02/09/2020 20:50: Compra cancelada</div>
        </div>

        <div className="modal__block">
          <div className="title">Dados de cobrança</div>
          <div className="sub">Nome:</div>
          <div className="text">Vinicius Esteves</div>
          <div className="sub">Endereço:</div>
          <div className="text">Rua tal de tal, 999 - Centro - SP</div>
          <div className="text">(11) 99999-9999 | (11) 9999-9999</div>
        </div>

        <div className="modal__block">
          <div className="title">Endereço de entrega</div>
          <div className="sub">Nome:</div>
          <div className="text">Vinicius Esteves</div>
          <div className="sub">Endereço:</div>
          <div className="text">Rua tal de tal, 999 - Centro - SP</div>
          <div className="text">(11) 99999-9999 | (11) 9999-9999</div>
        </div>

        <div className="modal__block">
          <div className="title">Seus produtos</div>
          <div className="thumb"><img src="./src/images/lavadora.jpg" /></div>
          <div className="desc_produto">Lavadora de Alta Pressao 1600PSI 110V 1200W Karcher K2</div>
          <div className="valor">
            <div className="val__item">
              <span>Valor Unitário</span>
              <strong>RS 553,50</strong>
            </div>
            <div className="val__item">
              <span>Valor Total</span>
              <strong>RS 553,50</strong>
            </div>
          </div>
        </div>

        <div className="modal__block">
          <div className="title">Resumo do pedido</div>
          <div className="sub">Valor Unitário</div>
          <div className="text">RS 553,50</div>
          <div className="sub">Valor Total</div>
          <div className="text">RS 553,50</div>
          <div className="sub">Valor Total</div>
          <div className="text">RS 553,50</div>
        </div>

        <div className="modal__block">
          <div className="title">Meio de pagamento</div>
          <div className="sub">Boleto bancário</div>
          <a className="metodo__btn">Imprimir 2ª via</a>
        </div>
      </div>
    </>
  );
}
