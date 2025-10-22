// src/services/authService.ts
import api from "./api";

export const login = (data: { email: string; password: string }) => api.post("/auth/login", data);

export const register = (data: { name: string; email: string; password: string }) => api.post("/auth/register", data);
