import { useReducer } from "react";
import {
  firebaseAuth,
  firebaseAuthInstance,
  initialState,
  reducer,
  ActionType,
} from "./authentication-context-provider-utilities";
import { AuthenticationContext } from "../../contexts";

export const AuthenticationContextProvider = ({ ...restProps }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const signIn = async (options: { email: string; password: string }) => {
    try {
      const userCredential = await firebaseAuth.signInWithEmailAndPassword(
        firebaseAuthInstance,
        options.email,
        options.password
      );

      const action = {
        type: ActionType.SignIn,
        email: userCredential.user.email || "",
        id: userCredential.user.uid || "",
      };

      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await firebaseAuth.signOut(firebaseAuthInstance);

      const action = {
        type: ActionType.SignOut,
      };

      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };

  const authenticationContextProviderValue = {
    isAuthenticated: state.isAuthenticated,
    signIn,
    signOut,
  };

  return (
    <AuthenticationContext.Provider
      value={authenticationContextProviderValue}
      {...restProps}
    />
  );
};
