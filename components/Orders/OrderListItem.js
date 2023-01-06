import { format, linkTo } from '@/helpers';
import Link from 'next/link';

export function OrderListItem({ order }) {
  const {
    codigoPedido,
    dataCadastro,
    valorTotal,
    status,
    statusId,
  } = order;

  const { nome: currentStatus } = status?.filter((x) => x.statusId === statusId)[0];

  return (
    <>
      <div className="main__single__pedido">
        <div className="info">
          <span className="cod">{codigoPedido}</span>
          <span className="date">
            {format.date(dataCadastro)}
            {' '}
            <span>{format.currency(valorTotal)}</span>
          </span>
        </div>
        <div className="status">{currentStatus?.toUpperCase()}</div>
        <div className="button btn-default"><Link href={linkTo.order(codigoPedido)}>Detalhes</Link></div>
        <div className="change"><a>Refazer pedido</a></div>
      </div>
    </>
  );
}
