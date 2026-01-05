import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Finale = () => {
    const [hasTriggered, setHasTriggered] = useState(false);

    const handleConfetti = () => {
        if (hasTriggered) return;
        setHasTriggered(true);

        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#FFDAB9', '#E6E6FA', '#FFB6C1']
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#FFDAB9', '#E6E6FA', '#FFB6C1']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    };

    return (
        <section className="h-screen flex flex-col items-center justify-center bg-offwhite text-center px-4 relative">
            <motion.div
                className="absolute inset-0 z-0"
                onViewportEnter={handleConfetti}
                viewport={{ once: true, amount: 0.5 }}
            />

            <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 1.2 }}
                className="text-6xl md:text-8xl font-handwriting text-primary mb-6 relative z-10"
            >
                Happy Birthday, Chhavi 🎉
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-3xl text-slate-600 font-light"
            >
                May your smile always stay this pure.
            </motion.p>
        </section>
    );
};

export default Finale;
