"use client";

import { useState } from "react";

import HeroSection from "./HeroSection";
import SuggestionCards from "./SuggestionCards";
import ConnectionStatus from "./ConnectionStatus";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

import { ChatMessage } from "@/types/chat";
import { sendMessage } from "@/lib/api";

export default function ChatWindow() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [loading, setLoading] = useState(false);

  async function handleSend() {

    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    const prompt = message;

    setMessage("");

    setLoading(true);

    try {

      const response = await sendMessage(
        "utkarsh",
        prompt
      );

      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          response.response ??
          response.message ??
          response.output ??
          "No response received.",
        createdAt: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "⚠️ Unable to connect to MORO backend.",
          createdAt: new Date(),
        },
      ]);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="flex flex-col h-full">

      {messages.length === 0 ? (

        <div className="flex-1 flex flex-col items-center justify-center">

          <HeroSection />

          <SuggestionCards
            onSelect={(text) => setMessage(text)}
          />

          <ConnectionStatus />

        </div>

      ) : (

        <div className="flex-1 overflow-y-auto">

          <MessageList
            messages={messages}
            loading={loading}
          />

        </div>

      )}

      <ChatInput
        message={message}
        setMessage={setMessage}
        onSend={handleSend}
        loading={loading}
      />

    </div>

  );

}