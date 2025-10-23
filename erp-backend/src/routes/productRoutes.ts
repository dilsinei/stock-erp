import { Router } from "express";
import { criarProduto } from "../controllers/productController";

const router = Router();

router.post("/produtos", criarProduto);

export default router;
