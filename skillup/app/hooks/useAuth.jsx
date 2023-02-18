import React, { useContext, useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children = null }) => {
  const [user, setUser] = useState();
  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
