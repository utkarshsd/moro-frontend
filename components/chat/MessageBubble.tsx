"use client";

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
                className={`max-w-[75%] rounded-3xl px-5 py-4 shadow-lg transition-all ${isUser
                        ? "bg-blue-600 text-white"
                        : "bg-slate-800 text-slate-100"
                    }`}
            >
                <p className="whitespace-pre-wrap leading-7">
                    {message.content}
                </p>
            </div>
        </div>
    );
}