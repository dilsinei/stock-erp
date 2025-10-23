// Tipos
export interface Produto {
    id_produto: number;
    nome_produto: string;
    tipo_medida: string; // 'unidade', 'kg', 'ton'
    quantidade_recebida: number;
    quantidade_retirada: number;
    quantidade_atual?: number; // opcional, calculada
}

// URL do backend
const API_URL = "http://localhost:3000/api";

// Função para listar produtos
export async function listarProdutos(): Promise<Produto[]> {
    const response = await fetch(`${API_URL}/produtos`);
    if (!response.ok) throw new Error("Erro ao buscar produtos");
    return response.json();
}

// Função para cadastrar um produto
export async function criarProduto(produto: {
    nome_produto: string;
    tipo_medida: string;
    quantidade_recebida: number;
}): Promise<Produto> {
    const response = await fetch(`${API_URL}/produtos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto),
    });
    if (!response.ok) throw new Error("Erro ao cadastrar produto");
    return response.json();
}
