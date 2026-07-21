"use client";
import { motion } from "framer-motion";
export default function ConnectionStatus() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: 0.6,
                duration: 0.5,
            }}
            className="flex items-center justify-center gap-2 mt-8"
        >

            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

            <p className="text-sm text-slate-400">
                Connected to MORO Backend
            </p>

        </motion.div>
    );
}