"use client";

import { useEffect, useRef } from "react";

import { ChatMessage } from "@/types/chat";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

interface MessageListProps {
    messages: ChatMessage[];
    loading?: boolean;
}

export default function MessageList({
    messages,
    loading = false,
}: MessageListProps) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    return (
        <div className="flex w-full max-w-4xl flex-col gap-4 p-6">
            {messages.map((message) => (
                <MessageBubble
                    key={message.id}
                    message={message}
                />
            ))}

            {loading && <TypingIndicator />}

            <div ref={bottomRef} />
        </div>
    );
}