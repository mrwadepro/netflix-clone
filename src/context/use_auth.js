import React, { useState, useEffect, useContext, createContext } from "react";

export const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState("Wade");

  const signIn = (email, password) => {};
  const signUp = (email, password) => {};
  const signOut = () => {};
  useEffect(() => {}, []);
  // Return the user object and auth methods

  return {
    user,
    signIn,
    signUp,
    signOut,
  };
}
