// src/components/Layout.tsx
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen grid grid-cols-[250px_1fr] bg-gray-100">
            <Sidebar />
            <main className="p-6">
                <Header />
                {children}
            </main>
        </div>
    );
}
