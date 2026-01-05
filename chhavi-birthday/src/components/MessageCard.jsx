import React from 'react';
import { motion } from 'framer-motion';

const MessageCard = () => {
    return (
        <section className="min-h-screen flex items-center justify-center p-6 bg-offwhite relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-peach/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-lavender/20 rounded-full blur-3xl" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative max-w-2xl w-full bg-white/80 backdrop-blur-md p-10 md:p-16 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-white/50"
            >
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />

                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -inset-[1px] bg-gradient-to-r from-peach via-lavender to-softpink rounded-2xl -z-10 blur-sm opacity-50 block"
                />

                <div className="text-center space-y-8">
                    <span className="text-4xl">💌</span>
                    <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-serif italic">
                        “Life gives many people, but only a few become reasons to smile without trying. <br />
                        <span className="text-primary font-semibold not-italic mt-4 block">You are one of those rare ones.</span>”
                    </p>

                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto" />
                </div>
            </motion.div>
        </section>
    );
};

export default MessageCard;
