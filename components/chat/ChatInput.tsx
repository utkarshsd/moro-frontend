"use client";

import { Paperclip, Mic, Send } from "lucide-react";

interface ChatInputProps {

    message: string;

    setMessage: React.Dispatch<
        React.SetStateAction<string>
    >;

    onSend: () => void;

    loading: boolean;

}

export default function ChatInput({

    message,

    setMessage,

    onSend,

    loading,

}: ChatInputProps) {

    return (

        <div className="p-6">

            <div className="rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl shadow-2xl">

                <textarea

                    rows={1}

                    value={message}

                    onChange={(e) =>
                        setMessage(e.target.value)
                    }

                    onKeyDown={(e) => {

                        if (
                            e.key === "Enter" &&
                            !e.shiftKey
                        ) {

                            e.preventDefault();

                            onSend();

                        }

                    }}

                    placeholder="Ask MORO anything..."

                    className="w-full resize-none bg-transparent p-5 text-white placeholder:text-slate-500 outline-none"

                />

                <div className="flex items-center justify-between border-t border-slate-800 px-4 py-3">

                    <button className="rounded-full p-2 transition hover:bg-slate-800">

                        <Paperclip size={18} />

                    </button>

                    <div className="flex gap-2">

                        <button className="rounded-full p-2 transition hover:bg-slate-800">

                            <Mic size={18} />

                        </button>

                        <button

                            onClick={onSend}

                            disabled={loading}

                            className="rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-500 disabled:opacity-50"

                        >

                            <Send size={18} />

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}