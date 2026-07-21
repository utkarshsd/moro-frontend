"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { ChatMessage } from "@/types/chat";

interface MessageBubbleProps {
    message: ChatMessage;
}

export default function MessageBubble({
    message,
}: MessageBubbleProps) {
    const isUser = message.role === "user";

    return (
        <div
            className={`flex w-full ${isUser ? "justify-end" : "justify-start"
                }`}
        >
            <div
                className={`max-w-[80%] rounded-3xl px-5 py-4 shadow-lg ${isUser
                        ? "bg-blue-600 text-white"
                        : "border border-slate-700 bg-slate-900/80 text-slate-100"
                    }`}
            >
                {!isUser && (
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-400">
                        <span>✦</span>
                        <span>MORO</span>
                    </div>
                )}

                <div className="prose prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {message.content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}