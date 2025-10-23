// src/components/Card.tsx
interface CardProps {
    icon: string;
    title: string;
    value?: string | number;
}

export default function Card({ icon, title, value }: CardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-5 flex flex-col justify-between">
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
            {value && <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>}
        </div>
    );
}
