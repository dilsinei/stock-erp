// src/components/PublicRoute.tsx
import { Navigate } from "react-router-dom";
import type { ReactElement } from "react";

export default function PublicRoute({ children }: { children: ReactElement }) {
    const token = localStorage.getItem("token");

    if (token) {
        return <Navigate to="/home" replace />;
    }

    return children;
}
