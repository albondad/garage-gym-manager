import * as firebaseApp from "firebase/app";
import * as firebaseAuth from "firebase/auth";
export * as firebaseAuth from "firebase/auth";

const firebaseAppInstance = firebaseApp.initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIRBASE_API_KEY,
  appId: process.env.NEXT_PUBLIC_FIRBASE_APP_ID,
  authDomain: process.env.NEXT_PUBLIC_FIRBASE_AUTH_DOMAIN,
  measurementId: process.env.NEXT_PUBLIC_FIRBASE_MEASUREMENT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRBASE_MESSAGING_SENDER_ID,
  projectId: process.env.NEXT_PUBLIC_FIRBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIRBASE_STORAGE_BUCKET,
});

export const firebaseAuthInstance = firebaseAuth.getAuth(firebaseAppInstance);

export enum ActionType {
  SignIn,
  SignOut,
}

type SignInAction = {
  type: ActionType;
  email: string;
  id: string;
};

type SignOutAction = {
  type: ActionType;
};

type Action = SignInAction | SignOutAction;

type State = {
  isAuthenticated: boolean;
};

export const reducer = (state: State, action: Action): State => {
  const newState = { ...state };

  switch (action.type) {
    case ActionType.SignIn:
      newState.isAuthenticated = true;
      break;
    case ActionType.SignOut:
      newState.isAuthenticated = false;
      break;
  }

  return newState;
};

export const initialState: State = {
  isAuthenticated: false,
};
