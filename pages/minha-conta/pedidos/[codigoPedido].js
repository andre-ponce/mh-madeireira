import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getOrder, getOrderPayment } from '@/services/orders.service';
import { format } from '@/helpers';
import { FloatBox } from '@/components/Modal/Modal';
import GlobalDataContext from '@/contexts/GlobalDataContext';
import { RemoteImage } from '@/components/Image';
import { url } from '@/services/statics.service';

export const getServerSideProps = withAuthorization(async () => {
  const [global] = await getGlobalData();
  return { props: { global } };
});

export default function OrderDetails({ global }) {
  const [order, setOrder] = useState();
  const { query } = useRouter();

  async function loadData() {
    const data = await getOrder(query.codigoPedido);
    const payment = await getOrderPayment(query.codigoPedido);

    data.pagamento = payment;

    if (!data?.fail) {
      setOrder(data);
    }
  }

  useEffect(() => loadData(), []);

  return (
    <Layout secureArea globalData={global}>
      {order && <OrderDetailed order={order} />}
    </Layout>
  );
}

function OrderDetailed({ order }) {
  const [showStatus, setShowStatus] = useState(false);
  const {
    itens,
    status,
    formaDePagamentoNome,
    formaDePagamento2Nome,
    numeroParcelas,
    valorParcelas,
    numeroParcelas2,
    valorParcelas2,
    valor,
    valorTotal,
    valorFrete,
    valorDesconto,
    valorJuros,
    valorCupomDesconto,
    valorDescontoPromocao,
    valorProtocolo21,
    valorDescontoSinief,
    siglaFormaEntrega,
    nomeDestinatario,
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    cep,
    ddd,
    telefone,
    vencimentoBoleto,
    cupomUsado,
    codigoPedido,
    prazoEntregaDiasUteis,
    pagamento,
    transportadora,
    dataCadastro,
  } = order;
  const { institucional: i } = useContext(GlobalDataContext);

  const hasDelivery = siglaFormaEntrega?.toLowerCase() !== 'rl';

  const deliveryAddress = format.address(
    endereco, numero, complemento, bairro, cep, cidade, estado,
  );

  const storeAddress = format.address(
    i.endereco, i.numero, i.complemento, i.bairro, i.cep, i.cidade, i.estado,
  );

  const phone = format.telephone(`${ddd}${telefone}`);
  const storePhone = [
    format.telephone(i.telefone),
    format.telephone(i.whatsapp),
  ].join(' | ');

  const [currentStatus] = status.sort((a, b) => (a.id < b.id ? 1 : -1));

  return (
    <main className="pedido-detalhe">
      <header>
        <h2>Acompanhamento do pedido</h2>
        <span>{codigoPedido}</span>
        <br />
        <strong>
          Status do Pedido:
          {' '}
          {currentStatus.nome}
        </strong>
        <br />
        <button onClick={() => setShowStatus(true)}>ver detalhes do status</button>
      </header>

      <div>
        {/* <StatusRule status={status} /> */}
        <section>

        </section>
      </div>

      <div className="pedido-detalhe--box">

        {
          hasDelivery && (
            <div>
              <div className="title">Endereço de entrega</div>
              <div className="sub">Nome:</div>
              <div className="text">{nomeDestinatario}</div>
              <div className="sub">Endereço:</div>
              <div className="text">{deliveryAddress}</div>
              <div className="sub">Telefone:</div>
              <div className="text">{phone}</div>
              <div className="sub">Previsao de Entrega:</div>
              <div className="text">
                {`${prazoEntregaDiasUteis} ${prazoEntregaDiasUteis > 1 ? 'dias úteis' : 'dia útil'}`}
                {' '}
                após a confirmação do pagamento
              </div>
            </div>
          )
        }

        {
          !hasDelivery && (
            <div>
              <div className="title">Dados para Retirada</div>
              <div className="sub">Endereço:</div>
              <div className="text">{storeAddress}</div>
              <div className="sub">Telefone:</div>
              <div className="text">{storePhone}</div>
              <div className="sub">ATENÇÃO:</div>
              <div className="text">Aguarde nossa confirmação para retirar seus produtos!</div>
            </div>
          )
        }

        <div>
          <div className="title">Seus produtos</div>
          {
            itens.map(({ produto, ...item }) => (

              <div className="pedido-detalhe--item">
                <div className="thumb">
                  <RemoteImage
                    src={url.imageProduct(produto.fotoUrl)}
                    alt={produto.nome}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="info">
                  <div>
                    <strong>
                      {item.quantidade}
                      {' '}
                      X
                      {' '}
                    </strong>
                    {produto.nome}
                  </div>
                  <div className="price">
                    <span>
                      <span>Valor Unitário:</span>
                      {' '}
                      <strong>{format.currency(item.preco)}</strong>
                    </span>
                    <span>
                      <span>Valor Total:</span>
                      {' '}
                      <strong>{format.currency(item.total)}</strong>
                    </span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div>
          <div className="title">Resumo do pedido</div>
          {
            valor > 0 && (
              <>
                <div className="sub">Sub total do Carrinho</div>
                <div className="text">{format.currency(valor)}</div>
              </>
            )
          }
          {
            valorFrete > 0 && (
              <>
                <div className="sub">Frete</div>
                <div className="text">{format.currency(valorFrete)}</div>
              </>
            )
          }
          {
            valorDesconto > 0 && (
              <>
                <div className="sub">Desconto pagamento à Vista</div>
                <div className="text">{format.currency(valorDesconto)}</div>
              </>
            )
          }
          {
            valorJuros > 0 && (
              <>
                <div className="sub">Juros</div>
                <div className="text">{format.currency(valorJuros)}</div>
              </>
            )
          }
          {
            valorCupomDesconto > 0 && (
              <>
                <div className="sub">Cupom de Desconto</div>
                <div className="text">{format.currency(valorCupomDesconto)}</div>
              </>
            )
          }
          {
            valorDescontoPromocao > 0 && (
              <>
                <div className="sub">Desconto Promoção</div>
                <div className="text">{format.currency(valorDescontoPromocao)}</div>
              </>
            )
          }
          {
            valorProtocolo21 > 0 && (
              <>
                <div className="sub">Protocolo 21</div>
                <div className="text">{format.currency(valorProtocolo21)}</div>
              </>
            )
          }
          {
            valorDescontoSinief > 0 && (
              <>
                <div className="sub">Desconto Sinief</div>
                <div className="text">{format.currency(valorDescontoSinief)}</div>
              </>
            )
          }
          {
            valorTotal > 0 && (
              <>
                <div className="sub">Valor Total</div>
                <div className="text">{format.currency(valorTotal)}</div>
              </>
            )
          }
        </div>

        <div>
          <div className="title">Meio de pagamento</div>
          <div className="sub">{pagamento.nome}</div>
          {
            pagamento.tipo === 'boleto' && (
              <a className="metodo__btn btn-default" href={pagamento.urlBoleto}>Imprimir 2ª via</a>
            )
          }
          {
            pagamento.tipo === 'credit-card' && (
              <>
                <div>
                  {pagamento.hashDoCartao}
                  {' '}
                  <strong>
                    {pagamento.parcelas}
                    {'x '}
                    {format.currency(pagamento.valorParcela)}
                  </strong>
                </div>
                <div className="sub">
                  {'Status: '}
                  {pagamento.statusPagamento}
                </div>
              </>
            )
          }
        </div>
      </div>
      {showStatus && <StatusHistoryModal statuses={status} handleHide={() => setShowStatus(false)} />}
    </main>
  );
}

function StatusHistoryModal({ statuses, handleHide }) {
  return (
    <FloatBox canClose handleHide={handleHide}>
      <div className="pedido-status">
        {
          statuses
            .sort((a, b) => (a.id < b.id ? 1 : -1))
            .map(({ id, nome, dataCadastro }) => (
              <div key={id} className="pedido-status--item">
                <span>{format.datetime(dataCadastro)}</span>
                {nome}
              </div>
            ))
        }
      </div>
    </FloatBox>
  );
}
