// https://notpad.org/login

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao realizar login.");
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Acesso ao Sistema</h2>
        
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="professor@react.com"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}