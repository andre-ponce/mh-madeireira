import { createContext } from 'react';

const UserLoggedContext = createContext({ loggedIn: false });

UserLoggedContext.displayName = 'UserLoggedContext';
export default UserLoggedContext;
export const UserLoggedProvider = UserLoggedContext.Provider;
