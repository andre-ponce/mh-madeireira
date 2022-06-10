import { createContext } from 'react';

const CheckoutContext = createContext();

CheckoutContext.displayName = 'CheckoutContext';

export default CheckoutContext;
export const CheckoutProvider = CheckoutContext.Provider;
