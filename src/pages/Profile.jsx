import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useParams } from "react-router-dom";
import { usePersonById } from "../hooks/usePersonById";
import ReturnButton from "../components/styles/ReturnButton";

export default function Profile() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { id } = useParams();
    const { person } = usePersonById(id);

    if (!person) {
        return (
            <div className={`container mt-4`}>

                <ReturnButton />

                <h1 className="mb-4">Nenhuma Pessoa Selecionada</h1>
            </div>
        );
    }

    return (
        <div className={`container mt-4`}>
            <ReturnButton />

            <h1 className="mb-4">Perfil</h1>

            <button className={`btn btn-${theme === "light" ? "dark" : "light"} mb-3`} onClick={toggleTheme}>
                Alternar Tema
            </button>

            <h3>{person.name}</h3>
            <p>Email: {person.email}</p>
            <p>Telefone: {person.phone}</p>
        </div>
    );
}

// notpad.org/profilepage