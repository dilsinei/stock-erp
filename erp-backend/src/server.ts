//erp-backend/src/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";

import productRoutes from "./routes/productRoutes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use("/api", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));

app.get("/", (req, res) => {
    res.send("🚀 API ERP rodando com sucesso!");
});
