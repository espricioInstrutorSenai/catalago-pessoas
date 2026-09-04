// https://notpad.org/home

import { useState, useContext } from "react";
import { usePersons } from "../hooks/usePersons";
import PersonList from "../components/PersonList";
import SkeletonLoading from "../components/SkeletonLoading";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { persons, loading } = usePersons();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout, isProfessor } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredPersons = persons.filter((p) => {
    const nameToFilter = p.name || p.firstname || "";
    return nameToFilter.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="container mt-4">
      {/* Cabeçalho informativo com Logout */}
      <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-light rounded shadow-sm text-dark">
        <div>
          <h4 className="mb-0">Olá, {user?.name}!</h4>
          <small className="text-muted">Perfil: <strong>{user?.role}</strong></small>
        </div>
        <button className="btn btn-outline-danger btn-sm" onClick={logout}>
          Sair (Logout)
        </button>
      </div>

      <h1 className="mb-4">Catálogo de Pessoas</h1>

      <div className="d-flex gap-2 mb-3">
        <button
          className={`btn btn-${theme === "light" ? "dark" : "light"}`}
          onClick={toggleTheme}
        >
          Alternar Tema
        </button>

        {/* Autorização Visual: O botão abaixo só é renderizado se o usuário for Professor */}
        {isProfessor && (
          <button
            className="btn btn-primary"
            onClick={() => navigate("/professor-painel")}
          >
            🎓 Painel do Professor
          </button>
        )}
      </div>

      <input
        className="form-control mb-3"
        placeholder="Buscar por nome..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <SkeletonLoading />
      ) : (
        <PersonList persons={filteredPersons} />
      )}
    </div>
  );
}