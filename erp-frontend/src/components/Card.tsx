// src/components/Card.tsx
export default function Card({ icon, title }: { icon: string; title: string }) {
    return (
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-3 hover:shadow-md transition">
            <span className="text-2xl">{icon}</span>
            <span className="text-lg font-medium">{title}</span>
        </div>
    );
}
