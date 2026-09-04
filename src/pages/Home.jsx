import { usePersons } from "../hooks/usePersons";
import PersonList from "../components/PersonList";
import SkeletonLoading from "../components/SkeletonLoading";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState } from "react";
import PersonModal from "../components/PersonModal";

export default function Home() {
  const { persons, loading } = usePersons();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filteredPersons = persons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">

      <input
        className="form-control mb-3"
        placeholder="Buscar por nome..."
        onChange={(e) => setSearch(e.target.value)}
      />

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
        <PersonList persons={filteredPersons} onSelectPerson={setSelectedPerson}/>
      )}

      {
        selectedPerson && (
          <PersonModal
            person={selectedPerson}
            onClose={()=> setSelectedPerson(null)}
          />
        )
      }
    </div>
  );
}