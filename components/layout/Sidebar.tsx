import {
    MessageSquare,
    Brain,
    Briefcase,
    BookOpen,
    Bot,
    Settings,
} from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="w-72 h-screen bg-slate-950 border-r border-slate-800 p-6">
            <h1 className="text-3xl font-bold text-blue-400 mb-10">
                MORO AI
            </h1>

            <nav className="space-y-4">

                <div className="flex items-center gap-3 text-slate-300 hover:text-white cursor-pointer">
                    <MessageSquare size={22} />
                    <span>Chat</span>
                </div>

                <div className="flex items-center gap-3 text-slate-300 hover:text-white cursor-pointer">
                    <Brain size={22} />
                    <span>Memory</span>
                </div>

                <div className="flex items-center gap-3 text-slate-300 hover:text-white cursor-pointer">
                    <Briefcase size={22} />
                    <span>Career</span>
                </div>

                <div className="flex items-center gap-3 text-slate-300 hover:text-white cursor-pointer">
                    <BookOpen size={22} />
                    <span>Learning</span>
                </div>

                <div className="flex items-center gap-3 text-slate-300 hover:text-white cursor-pointer">
                    <Bot size={22} />
                    <span>Agents</span>
                </div>

                <div className="flex items-center gap-3 text-slate-300 hover:text-white cursor-pointer">
                    <Settings size={22} />
                    <span>Settings</span>
                </div>

            </nav>
        </aside>
    );
}