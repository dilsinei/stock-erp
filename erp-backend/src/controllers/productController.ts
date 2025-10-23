import { Request, Response } from "express";
import { pool } from "../config/db"; // supondo que você use pg Pool

export const criarProduto = async (req: Request, res: Response) => {
    try {
        const { nome_produto, tipo_medida, quantidade_recebida } = req.body;

        const result = await pool.query(
            `INSERT INTO produtos (nome_produto, tipo_medida, quantidade_recebida)
             VALUES ($1, $2, $3) RETURNING *`,
            [nome_produto, tipo_medida, quantidade_recebida]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao cadastrar produto" });
    }
};
