// src/components/Sidebar.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const [active, setActive] = useState("Início");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const menuItems = ["Início", "Clientes", "Vendas", "Estoque"];

    return (
        <aside className="bg-white shadow-md p-4 flex flex-col min-h-screen w-64">
            <div className="flex-1">
                <h1 className="text-xl font-bold mb-6 text-blue-600">ERP System</h1>

                <nav className="space-y-1">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActive(item)}
                            className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                                active === item ? "bg-blue-100 text-blue-700 font-semibold" : "hover:bg-gray-100"
                            }`}
                        >
                            {item}
                        </button>
                    ))}
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
