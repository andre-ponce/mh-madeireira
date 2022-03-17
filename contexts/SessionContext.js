import { createContext } from 'react';

const SessionContext = createContext({
  sessionId: Date.now() + '',
  cart: {},
});

export default SessionContext;
