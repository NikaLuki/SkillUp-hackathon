import React, { useContext, useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children = null }) => {
    const [user, setUser] = useState({});
    useEffect(() => {}, []);

    function logOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, setUser, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
