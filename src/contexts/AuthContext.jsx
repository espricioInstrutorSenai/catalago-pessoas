import { createContext, useState, useEffect } from "react";
import { loginRequest, getMeRequest } from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storedToken = localStorage.getItem("@CatalogoPessoas:token");
            const storedUser = localStorage.getItem("@CatalogoPessoas:user");

            if (storedToken && storedUser) {
                try {
                    const data = await getMeRequest();
                    setUser(data.user);
                } catch (error) {
                    logout();
                }
            }

            setLoading(false);
        }

        loadStorageData()
    }, []);

    async function login(email, password) {
        const data = await loginRequest(email, password);

        setUser(data.user);

        localStorage.setItem("@CatalogoPessoas:token", data.token);
        localStorage.setItem("@CatalogoPessoas:user", JSON.stringify(data.user));
    }

    function logout() {
        // 💡 IMPORTANTE: Como o JWT é stateless (sem estado no servidor), o logout de fato
        // ocorre apagando o token local no cliente. O backend não mantém sessões ativas na memória,
        // o que significa que invalidar o token precisa apenas destruí-lo no navegador.

        localStorage.removeItem("@CatalogoPessoas:token");
        localStorage.removeItem("@CatalogoPessoas:user");
        setUser(null);
    }

    const isProfessor = user?.role === "professor";

    return(
        <AuthContext.Provider value={{isAuthenticated: !!user, user, login, logout, loading, isProfessor}}>
            {children}
        </AuthContext.Provider>
    );

}