import { useState, useEffect } from "react";
import type { Produto } from "../services/produtoService";
import { listarProdutos } from "../services/produtoService";
import { useNavigate } from "react-router-dom";

export default function Estoque() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        listarProdutos()
            .then(setProdutos)
            .catch((err) => console.error(err));
    }, []);

    const quantidadeAtual = (recebida: number, retirada: number) => recebida - retirada;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Estoque</h2>

            <button
                onClick={() => navigate("/cadastrar-produto")}
                className="mb-4 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
                + Cadastrar Produto
            </button>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border">ID</th>
                            <th className="py-2 px-4 border">Produto</th>
                            <th className="py-2 px-4 border">Tipo</th>
                            <th className="py-2 px-4 border">Recebido</th>
                            <th className="py-2 px-4 border">Retirado</th>
                            <th className="py-2 px-4 border">Atual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((p) => (
                            <tr key={p.id_produto} className="text-center hover:bg-gray-50">
                                <td className="py-2 px-4 border">{p.id_produto}</td>
                                <td className="py-2 px-4 border text-left">{p.nome_produto}</td>
                                <td className="py-2 px-4 border">{p.tipo_medida}</td>
                                <td className="py-2 px-4 border">{p.quantidade_recebida}</td>
                                <td className="py-2 px-4 border">{p.quantidade_retirada}</td>
                                <td className="py-2 px-4 border font-semibold">
                                    {quantidadeAtual(p.quantidade_recebida, p.quantidade_retirada)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
