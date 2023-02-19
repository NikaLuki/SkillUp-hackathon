import React, { useContext, useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("Search");
    useEffect(() => {}, []);

    function singIn(data) {
        alert(data.email + " " + data.password);
        setUser({ email: data.email, password: data.password });
    }
    function logOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, setUser, logOut, singIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
