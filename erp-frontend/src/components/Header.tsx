// src/components/Header.tsx
export default function Header() {
    return (
        <header className="flex justify-between items-center bg-white shadow px-6 py-3 mb-6 rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            <div className="flex items-center gap-3">
                <span className="text-gray-600">Bem-vindo, Usuário 👋</span>
                <img
                    src="https://ui-avatars.com/api/?name=Usuario&background=0D8ABC&color=fff"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                />
            </div>
        </header>
    );
}
