import { createContext } from 'react';

const GlobalDataContext = createContext({});

GlobalDataContext.displayName = 'GlobalDataContext';

export default GlobalDataContext;
export const GlobalDataProvider = GlobalDataContext.Provider;
