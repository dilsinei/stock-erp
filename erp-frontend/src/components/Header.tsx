// src/components/Header.tsx
export default function Header() {
    return (
        <header className="bg-white shadow px-6 py-3 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-700">Painel ERP</h2>
            <div className="text-gray-500 text-sm">
                Usuário logado: <span className="font-medium text-gray-800">admin@empresa.com</span>
            </div>
        </header>
    );
}
