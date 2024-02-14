import { createContext, useState } from "react";

export const AuthContext = createContext({
  loading: false,
  user: null,
  signUserIntoApp: () => {},
  signUserOutOfApp: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const signUserIntoApp = (user) => {
    setUser(user);
    // window.localStorage.setItem("user", JSON.stringify(user));
  };

  const signUserOutOfApp = () => {
    setUser(null);
    // window.localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        signUserOutOfApp,
        signUserIntoApp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
