// src/components/Sidebar.tsx
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <aside className="bg-white shadow-md p-4 flex flex-col h-full">
            <div className="flex-1">
                <h1 className="text-xl font-bold mb-6 text-blue-600">ERP System</h1>
                <nav className="space-y-2">
                    <Link to="/home" className="block w-full text-left hover:bg-gray-100 p-2 rounded">
                        🏠 Início
                    </Link>
                    <Link to="/clientes" className="block w-full text-left hover:bg-gray-100 p-2 rounded">
                        👥 Clientes
                    </Link>
                    <Link to="/vendas" className="block w-full text-left hover:bg-gray-100 p-2 rounded">
                        💰 Vendas
                    </Link>
                    <Link to="/estoque" className="block w-full text-left hover:bg-gray-100 p-2 rounded">
                        📦 Estoque
                    </Link>
                </nav>
            </div>

            <button
                onClick={handleLogout}
                className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded mt-4 transition-colors"
            >
                🚪 Sair
            </button>
        </aside>
    );
}
