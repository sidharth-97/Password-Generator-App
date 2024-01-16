import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const loginC = (userData) => {
        setUser(userData)
    }
    const logoutC = () => {
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{ user, loginC, logoutC }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}