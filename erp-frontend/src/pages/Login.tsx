// erp-frontend/src/pages/Login.tsx
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Preencha todos os campos!");
            return;
        }

        try {
            setLoading(true);
            const { data } = await axios.post("http://localhost:3000/login", {
                email,
                password,
            });

            localStorage.setItem("token", data.token);
            window.location.href = "/home";
        } catch (err: unknown) {
            console.error(err);
            setError("Credenciais inválidas ou erro de conexão.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

                <input
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    className="w-full mb-4 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    aria-label="Senha"
                    className="w-full mb-4 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full p-3 rounded text-white font-medium transition ${
                        loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    {loading ? "Entrando..." : "Entrar"}
                </button>

                <p className="text-sm text-center mt-4">
                    Não tem conta?{" "}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Cadastre-se
                    </a>
                </p>
            </form>
        </div>
    );
}
