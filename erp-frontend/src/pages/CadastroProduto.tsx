import { useState } from "react";
import { criarProduto } from "../services/produtoService";
import { useNavigate } from "react-router-dom";

export default function CadastroProduto() {
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("unidade");
    const [quantidade, setQuantidade] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await criarProduto({ nome_produto: nome, tipo_medida: tipo, quantidade_recebida: quantidade });
            alert("Produto cadastrado com sucesso!");
            navigate("/estoque");
        } catch (err) {
            console.error(err);
            alert("Erro ao cadastrar produto");
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Cadastrar Produto</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Nome do produto"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full border p-2 rounded"
                    required
                />
                <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="w-full border p-2 rounded">
                    <option value="unidade">Unidade</option>
                    <option value="kg">Kg</option>
                    <option value="ton">Tonelada</option>
                </select>
                <input
                    type="number"
                    placeholder="Quantidade recebida"
                    value={quantidade}
                    onChange={(e) => setQuantidade(Number(e.target.value))}
                    className="w-full border p-2 rounded"
                    required
                />
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}
