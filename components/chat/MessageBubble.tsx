"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
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
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({
                                inline,
                                className,
                                children,
                                ...props
                            }: any) {
                                const match = /language-(\w+)/.exec(
                                    className || ""
                                );

                                const code = String(children).replace(
                                    /\n$/,
                                    ""
                                );

                                if (!inline && match) {
                                    return (
                                        <CodeBlock
                                            language={match[1]}
                                            code={code}
                                        />
                                    );
                                }

                                return (
                                    <code
                                        className="rounded bg-slate-800 px-1.5 py-0.5 text-sm text-blue-300"
                                        {...props}
                                    >
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    >
                        {message.content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}


interface CodeBlockProps {
    language: string;
    code: string;
}


function CodeBlock({
    language,
    code,
}: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(code);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <div className="my-4 overflow-hidden rounded-xl border border-slate-700">

            <div className="flex items-center justify-between bg-slate-800 px-4 py-2">

                <span className="text-xs uppercase text-slate-400">
                    {language}
                </span>

                <button
                    onClick={handleCopy}
                    className="text-xs text-slate-400 transition hover:text-white"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>

            </div>

            <SyntaxHighlighter
                language={language}
                style={oneDark}
                customStyle={{
                    margin: 0,
                    padding: "1rem",
                    background: "#020617",
                    fontSize: "0.875rem",
                }}
            >
                {code}
            </SyntaxHighlighter>

        </div>
    );
}