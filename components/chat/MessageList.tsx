"use client";

import { ChatMessage } from "@/types/chat";
import MessageBubble from "./MessageBubble";

interface MessageListProps {
    messages: ChatMessage[];
}

export default function MessageList({
    messages,
}: MessageListProps) {
    return (
        <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto p-6 overflow-y-auto">
            {messages.map((message) => (
                <MessageBubble
                    key={message.id}
                    message={message}
                />
            ))}
        </div>
    );
}