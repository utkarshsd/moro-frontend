"use client";
import { motion } from "framer-motion";
export default function HeroSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            className="flex flex-col items-center justify-center text-center h-full px-8"
        >

            <h1 className="text-6xl font-bold tracking-tight bg-linear-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
                MORO AI
            </h1>

            <p className="mt-6 text-2xl text-white font-semibold">
                Your Personal AI Operating System
            </p>

            <p className="mt-4 max-w-2xl text-slate-400 text-lg leading-8">
                Career guidance, AI automation, lifelong learning,
                memory, productivity and everything you need
                in one intelligent assistant.
            </p>

        </motion.div>
    );
}