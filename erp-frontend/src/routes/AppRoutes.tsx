// src/routes/AppRoutes.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Estoque from "../pages/Estoque";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import Layout from "../components/Layout";
import CadastroProduto from "../pages/CadastroProduto";

export default function AppRoutes() {
    const token = localStorage.getItem("token");

    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas públicas */}
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />

                {/* Rotas protegidas (com Layout) */}
                <Route
                    element={
                        <ProtectedRoute>
                            <Layout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/home" element={<Home />} />
                    <Route path="/estoque" element={<Estoque />} />
                </Route>
                <Route path="/cadastrar-produto" element={<CadastroProduto />} />
                <Route path="/estoque" element={<Estoque />} />

                {/* Redirecionamento padrão */}
                <Route path="/" element={token ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />} />

                {/* Página não encontrada */}
                <Route path="*" element={<h1 className="text-center mt-10 text-2xl">404 - Página não encontrada</h1>} />
            </Routes>
        </BrowserRouter>
    );
}
