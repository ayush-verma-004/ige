import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Coffee, Music, Zap } from 'lucide-react';

const cards = [
    {
        id: 1,
        text: "You make ordinary days feel like adventures.",
        icon: Star,
        color: "bg-peach"
    },
    {
        id: 2,
        text: "For listening to my drama without judging.",
        icon: Coffee,
        color: "bg-lavender"
    },
    {
        id: 3,
        text: "Our midnight snack sessions > Everything else.",
        icon: Zap,
        color: "bg-softpink"
    },
    {
        id: 4,
        text: "You get my weird music taste.",
        icon: Music,
        color: "bg-peach"
    },
    {
        id: 5,
        text: "Just for being the vibe check I always need.",
        icon: Heart,
        color: "bg-lavender"
    }
];

const Card = ({ data, index, onDragEnd }) => {
    return (
        <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 100) {
                    onDragEnd(data.id);
                }
            }}
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{
                scale: 1 - index * 0.05,
                top: index * 10,
                opacity: 1 - index * 0.2,
                zIndex: cards.length - index
            }}
            exit={{ x: 200, opacity: 0, rotate: 20 }}
            className={`absolute top-0 left-0 right-0 mx-auto w-72 h-96 ${data.color} rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 text-center cursor-grab active:cursor-grabbing border-4 border-white`}
            style={{
                transformOrigin: "top center"
            }}
        >
            <div className="bg-white/30 p-4 rounded-full mb-6 backdrop-blur-sm">
                <data.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-handwriting text-slate-700 leading-snug">
                {data.text}
            </h3>
            <p className="absolute bottom-6 text-xs text-white/70 uppercase tracking-widest font-bold">
                Swipe to reveal
            </p>
        </motion.div>
    );
};

const ReasonsStack = () => {
    const [activeCards, setActiveCards] = useState(cards);

    const handleDragEnd = (id) => {
        setActiveCards((prev) => prev.filter((card) => card.id !== id));
        // Reset stack if empty for infinite play
        if (activeCards.length === 1) {
            setTimeout(() => setActiveCards(cards), 500);
        }
    };

    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center bg-offwhite py-20 relative overflow-hidden">

            {/* Title */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-handwriting text-slate-700 mb-4">Why You're Special</h2>
                <p className="text-slate-400 font-light">Swipe to see the reasons ➜</p>
            </div>

            <div className="relative w-full max-w-sm h-96 flex items-center justify-center">
                <AnimatePresence>
                    {activeCards.map((card, index) => (
                        <Card
                            key={card.id}
                            data={card}
                            index={index}
                            onDragEnd={handleDragEnd}
                        />
                    ))}
                </AnimatePresence>

                {activeCards.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center"
                    >
                        <Heart className="w-16 h-16 text-red-300 mx-auto mb-4 animate-bounce" />
                        <p className="text-2xl text-slate-500 font-handwriting">That's why!</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ReasonsStack;
