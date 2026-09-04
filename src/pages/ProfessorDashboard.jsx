// https://notpad.org/ProfessorDashboard

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Award, BookOpen } from "lucide-react";

export default function ProfessorDashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="container mt-4" style={{ maxWidth: "800px" }}>
      <button
        className="btn btn-dark mb-4 d-flex align-items-center gap-2"
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={18} /> Voltar para o Catálogo
      </button>

      <div className="card p-4 shadow border-0">
        <div className="d-flex align-items-center gap-3 mb-4">
          <Award size={36} className="text-primary" />
          <h1 className="h3 mb-0">Área Exclusiva do Professor</h1>
        </div>

        <div className="alert alert-success d-flex align-items-start gap-3">
          <BookOpen size={24} className="mt-1" />
          <div>
            <h5 className="alert-heading">Didática: Como este acesso foi protegido?</h5>
            <p className="mb-0">
              Esta rota está protegida e exige o perfil (role) de "professor". O usuário 
              <strong> {user?.name}</strong> pôde entrar porque seu cadastro possui <code>"role": "professor"</code>.
            </p>
          </div>
        </div>

        <button className="btn btn-danger mt-4" onClick={logout}>
          Sair (Logout)
        </button>
      </div>
    </div>
  );
}
