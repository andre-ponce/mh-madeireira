import { withAuthorization } from '@/server/lib/withAuthorization';
import Layout from '@/components/Layout';
import { getGlobalData } from '@/server/api/global.api';
import Link from 'next/link';
import { linkTo } from '@/helpers';

export const getServerSideProps = withAuthorization(async ({ user, query }) => {
  const [global] = await getGlobalData();
  //TODO: checa se o pedido é desse cliente
  //TODO: checa o status do pedido
  return {
    props: {
      user,
      code: query.code,
      global,
    },
  };
});

export default function Confirmacao({ global, user, code }) {
  return (
    <Layout secureArea globalData={global}>
      <main className="confirmacao">

        <h2 className="confirmacao--title">Sua compra foi realizada com sucesso!</h2>

        <div className="confirmacao--message">
          Obrigado por comprar em nosso site
          <br />
          Você receberá todos os dados da sua compra no email
          {' '}
          <strong>{user.email}</strong>
        </div>

        <div className="confirmacao--details">
          <span>Código do Pedido</span>
          <br />
          <span className="confirmacao--code">{code}</span>
          <br />
          <Link href={linkTo.order(code)} passHref>
            <a className="confirmacao--action">Acompanhar seu Pedido</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
