import { verbsRouter } from '@/server/lib/verbs-api-router';
import { cookie } from '@/server/constants/cookies';
import { getCart } from '@/server/api/cart.api';

const verbs = {
  async get(req, res) {
    const { cookies } = req;
    const sessionId = cookies[cookie.session.COOKIE_NAME];

    const { itens } = await getCart(sessionId);

    return res.json({
      siglaOpcaoFrete: 'pc',
      codigoCupomDesconto: '',
      endrecoDeEntregaId: 123,
      cepSimulador: '12345-678',
      items: itens,
      cliente: {
        nome: 'Pedro Ramon de Carvalho',
        email: 'pedroramon@outlook.com',
        documentoNacional: '41065269803',
        telefone: '+5511999999999',
      },
      enderecoDeEntrega: {
        endereco: 'Rua Gal. Teles',
        numero: '514',
        bairro: 'Estação',
        cidade: 'Franca',
        estado: 'SP',
        complemento: '',
        destinatario: 'Mathildes',
        identificacao: 'Casa Vó',
        telefone: '3712 1345',
        ddd: '12',
      },
      // cupomDeDesconto: {
      //   codigo: 'frete-gratis',
      //   desconto: 10,
      //   percentual: true,
      //   cupomDeFrete: false,
      // },
      opcoesDeFrete: [
        { id: 'sd', name: 'Sedex', price: 10, estimatedTime: 'Em até 3 dias úteis', selected: false },
        { id: 'pc', name: 'Pac', price: 5, estimatedTime: 'Em até 8 dias úteis', selected: true },
      ],
    });
  },
};

const routes = verbsRouter(verbs);

export default routes;
