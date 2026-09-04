import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { User } from "lucide-react";

export default function PersonCard({ person, onClick }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  function handleViewProfile(){
    // a rota precisa estar configurada no BrowserRouter!!
    navigate(`/perfil/${person.id}`);
  }

  return (
    <div
      className="card p-3 mb-3 shadow-sm"
      onClick={() => onClick(person)}
      style={{ cursor: "pointer" }}
    >
      <h5>{person.name}</h5>
      <p>Email: {person.email}</p>
      <p>Telefone: {person.phone}</p>

      <button
        className={`btn btn-${theme === "light" ? "dark" : "light"}`}
        onClick={handleViewProfile}
      >
        <User size={18}/>
      </button>
    </div>
  );
}