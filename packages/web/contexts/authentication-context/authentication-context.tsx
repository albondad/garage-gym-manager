import { createContext, useContext } from "react";

const defaultAuthenticationContextValue = {
  isAuthenticated: false,
  signIn: (options: { email: string; password: string }) => {},
  signOut: () => {},
};

export const AuthenticationContext = createContext(
  defaultAuthenticationContextValue
);

export const useAuthenticationContext = () => useContext(AuthenticationContext);
