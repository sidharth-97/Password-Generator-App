import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const userData = localStorage.getItem('user')
        if (userData) {
            setUser(JSON.parse(userData))
        }
    }, [])

    const loginC = (userData) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData)) 
    }

    const logoutC = () => {
        setUser(null)
        localStorage.removeItem('user') 
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