import Layout from '@/components/Layout';
import SessionContext from '@/contexts/SessionContext';
import { getGlobalData } from '@/server/api/global.api';
import { useContext } from 'react';

export async function getServerSideProps() {
  const [global] = await getGlobalData();
  return {
    props: { global },
  };
}

export default function Cart({ global }) {
  return (
    <>
      <Layout globalData={global} secureArea>
        <main className="carrinho app-container d-flex row">
          <Grid />
          <Sidebar />
        </main>
      </Layout>
    </>
  );
}

function Grid() {
  const { itens } = useContext(SessionContext);

  return (
    <>
      <div className="main__left">
        <h2 className="title-border-left">Seu carrinho</h2>
        <div className="form-row">
          {
            itens && itens.map((item) => <CartItem key={item.id} item={item} />)
          }
        </div>
      </div>
    </>
  );
}

function CartItem({ item }) {
  return (
    <>
      <div className="main_left_prod">
        <div className="thumb">
          <img src="./src/images/braskape-cart-prod.jpg" alt="Produto" title="Produto" />
        </div>
        <div className="desc">
          <p>{item.nome}</p>
          <p>Ref: 029123-0</p>
          <p>Cod: 098304929348273 </p>
        </div>
        <div className="actions">
          <a className="trash">
            <img src="/images/braskape-icon-delete.png" alt="Excluir" />
          </a>
          <div className="cont">
            <a className="qtd-item__minus">-</a>
            <input type="text" maxLength={3} value={1} />
            <a className="qtd-item__plus">+</a>
          </div>
          <div className="value">Valor Total: <strong>R$999,99</strong></div>
          <div className="clear"></div>
        </div>
      </div>
    </>
  );
}

function Sidebar() {
  return (
    <>
      <div className="main__right">
        <h2 className="title-border-left">Simule o frete</h2>
        <div className="form-row frete">
          <form className="main__form">
            <div className="col-md-12 mb-3">
              <label htmlFor="validationDefault01">Digite seu CEP do endereço de entrega:</label>
              <input id="cep" placeholder="00000-000" className="form-control" id="validationDefault01" required />
              <button type="button" className="main__form__button">Ok</button>
            </div>
          </form>
        </div>

        <h2 className="title-border-left">Resumo</h2>
        <div className="form-row finalizar">
          <div className="col-4 values">Subtotal:<strong>R$999,99</strong></div>
          <div className="col-4 values">Frete:<strong>R$999,99</strong></div>
          <div className="col-4 values">Total:<strong>R$999,99</strong></div>
          <a className="first" href="#">Continuar comprando</a>
          <a href="#">Finalizar compra</a>
          <p className="form_row_obs">Possui cupom ou vale? Você poderá usá-los na etapa de pagamento.</p>
        </div>
      </div>
    </>
  );
}
