import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ProfessorDashboard from "./pages/ProfessorDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {

  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Rotas Públicas */}
            <Route path="/login" element={<Login />} />

            {/* Rotas Protegidas (Qualquer usuário logado acessa) */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/perfil/:id" element={<Profile />} />
            </Route>

            {/* Rotas Protegidas pelo Nível Professor */}
            <Route element={<ProtectedRoute allowedRoles={["professor"]} />}>
              <Route path="/professor-painel" element={<ProfessorDashboard />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
