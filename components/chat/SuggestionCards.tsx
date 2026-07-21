"use client";

interface Props {
    onSelect: (text: string) => void;
}

const suggestions = [
    "🚀 Build an AI Agent",
    "💼 Improve my Resume",
    "📚 Create a Study Plan",
    "🤖 Explain Machine Learning"
];

export default function SuggestionCards({ onSelect }: Props) {
    return (
        <div className="grid grid-cols-2 gap-4 mt-8 max-w-3xl">

            {suggestions.map((item) => (
                <button
                    key={item}
                    onClick={() => onSelect(item)}
                    className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-left hover:border-blue-500 hover:bg-slate-800 transition"
                >
                    {item}
                </button>
            ))}

        </div>
    );
}