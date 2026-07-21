"use client";

import { motion } from "framer-motion";

export default function TypingIndicator() {
    return (
        <div className="flex w-full justify-start">
            <div className="flex items-center gap-2 rounded-3xl bg-slate-800 px-5 py-4">

                <span className="text-sm text-slate-400">
                    MORO is thinking
                </span>

                <div className="flex gap-1">
                    {[0, 1, 2].map((index) => (
                        <motion.span
                            key={index}
                            className="h-1.5 w-1.5 rounded-full bg-blue-400"
                            animate={{
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: index * 0.2,
                            }}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}