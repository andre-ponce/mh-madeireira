import { createContext } from 'react';

const SessionContext = createContext({
  cart: {},
  user: {},
});

/*
item[] itens;
decimal subTotal;
parcelamento maiorParcelaSemJuros;
int emAte;
decimal de;
servico[] opcoesDeFrete;
parcelamento[] opcoesDePagamento;
 */

SessionContext.displayName = 'SessionContext';

export default SessionContext;
export const SessionProvider = SessionContext.Provider;
