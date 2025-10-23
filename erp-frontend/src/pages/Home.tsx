// src/pages/Home.tsx
import Card from "../components/Card";

export default function Home() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Card icon="💰" title="Vendas do mês" />
            <Card icon="📦" title="Produtos" />
            <Card icon="👥" title="Clientes" />
        </div>
    );
}
