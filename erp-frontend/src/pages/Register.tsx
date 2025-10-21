// erp-frontend/src/pages/Register.tsx
import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            await axios.post("http://localhost:3000/register", {
                name,
                email,
                password,
            });

            setSuccess(true);
            // Redireciona para login após 1,5s
            setTimeout(() => {
                window.location.href = "/login";
            }, 1500);
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || "Erro ao cadastrar. Tente novamente.");
            } else {
                setError("Erro ao cadastrar. Tente novamente.");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow w-96">
                <h1 className="text-2xl font-bold mb-6 text-center">Cadastro</h1>

                <input
                    type="text"
                    placeholder="Nome completo"
                    className="w-full mb-4 p-2 border rounded"
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 p-2 border rounded"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Senha"
                    className="w-full mb-4 p-2 border rounded"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p className="text-red-600 text-sm mb-3 text-center">{error}</p>}
                {success && (
                    <p className="text-green-600 text-sm mb-3 text-center">Cadastro realizado! Redirecionando...</p>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </button>

                <p className="text-sm text-center mt-4">
                    Já tem conta?{" "}
                    <a href="/login" className="text-blue-600">
                        Faça login
                    </a>
                </p>
            </form>
        </div>
    );
}
