import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="min-h-screen grid grid-cols-[250px_1fr] bg-gray-100">
            <aside className="bg-white shadow-md p-4 flex flex-col">
                <div className="flex-1">
                    <h1 className="text-xl font-bold mb-4">ERP System</h1>
                    <nav className="space-y-2">
                        <button className="block w-full text-left hover:bg-gray-200 p-2 rounded">Início</button>
                        <button className="block w-full text-left hover:bg-gray-200 p-2 rounded">Clientes</button>
                        <button className="block w-full text-left hover:bg-gray-200 p-2 rounded">Vendas</button>
                        <button className="block w-full text-left hover:bg-gray-200 p-2 rounded">Estoque</button>
                    </nav>
                </div>

                {/* Botão de Logout */}
                <button
                    onClick={handleLogout}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded mt-4 transition-colors"
                >
                    🚪 Sair
                </button>
            </aside>

            <main className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow">💰 Vendas do mês</div>
                    <div className="bg-white rounded-xl p-4 shadow">📦 Produtos</div>
                    <div className="bg-white rounded-xl p-4 shadow">👥 Clientes</div>
                </div>
            </main>
        </div>
    );
}
