import { usePersons } from "../hooks/usePersons";
import PersonList from "../components/PersonList";
import SkeletonLoading from "../components/SkeletonLoading";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function Home() {
  const { persons, loading } = usePersons();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="container mt-4">
      <button
        className={`btn btn-${theme === "light" ? "dark" : "light"} mb-3`}
        onClick={toggleTheme}
      >
        Alternar Tema
      </button>

      <h1 className="mb-4">Catálogo de Pessoas</h1>

      {loading ? (
        <SkeletonLoading />
      ) : (
        <PersonList persons={persons} />
      )}
    </div>
  );
}