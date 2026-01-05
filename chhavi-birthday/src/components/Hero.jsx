import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Balloon = ({ color, delay, x, y, size = 60 }) => (
    <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 1 }}
        transition={{
            y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay },
            opacity: { duration: 1, delay }
        }}
        className="absolute z-10"
        style={{ left: `${x}%`, top: `${y}%` }}
    >
        <div
            className="relative rounded-[50%_50%_50%_50%/40%_40%_60%_60%]"
            style={{
                width: size,
                height: size * 1.2,
                background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, ${color} 40%, rgba(0,0,0,0.1) 100%)`,
                boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.1), 5px 10px 15px rgba(0,0,0,0.1)'
            }}
        >
            {/* String */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-20 bg-slate-400 opacity-50" />
        </div>
    </motion.div>
);

const Podium = () => (
    <div className="relative w-48 h-16 md:w-64 md:h-24 bg-white rounded-[100%] shadow-[0_20px_50px_rgba(0,0,0,0.2)] mx-auto mt-10 md:mt-20 transform rotate-x-12">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 rounded-[100%]" />
        <div className="absolute -bottom-4 inset-x-0 h-10 bg-gray-300 rounded-[100%] -z-10 blur-sm" />
    </div>
);

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--color-peach)_0%,_var(--color-lavender)_100%)]">

            {/* Floating 3D Shapes Background */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-gradient-to-br from-white/20 to-transparent blur-3xl"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-gradient-to-tl from-primary/10 to-transparent blur-3xl"
            />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 w-full h-full pt-20 md:pt-0">

                {/* Left Column: Text & Podium */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-left relative order-2 md:order-1"
                >
                    <h2 className="text-xs md:text-md uppercase tracking-[0.3em] text-white/80 font-bold mb-2 md:mb-4">Celebration Day</h2>
                    <h1 className="text-5xl md:text-8xl font-handwriting text-white drop-shadow-md mb-2 leading-tight">
                        Happy <br /> Birthday
                    </h1>
                    <h2 className="text-3xl md:text-6xl font-bold text-white/90 mb-4 md:mb-8">
                        To You
                    </h2>

                    <motion.p
                        className="text-white/80 text-base md:text-xl font-light mb-6 md:mb-8 max-w-md mx-auto md:mx-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Confirm your attendance in my heart.
                    </motion.p>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                        className="flex justify-center md:justify-start"
                    >
                        <Podium />
                    </motion.div>
                </motion.div>

                {/* Right Column: Balloons & Date */}
                <div className="relative h-[300px] md:h-[600px] flex items-center justify-center order-1 md:order-2">
                    {/* 3D Balloons - Adjusted positions for mobile */}
                    <Balloon color="#E6E6FA" x={20} y={10} delay={0.2} size={60} />
                    <Balloon color="#9370DB" x={60} y={5} delay={0.5} size={70} />
                    <Balloon color="#D8BFD8" x={80} y={25} delay={0.8} size={50} />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="absolute md:right-0 md:top-1/2 md:-translate-y-1/2 text-center md:text-right z-20 mt-20 md:mt-0"
                    >
                        <div className="text-white backdrop-blur-sm bg-white/10 p-4 rounded-xl md:bg-transparent md:p-0 md:backdrop-blur-none inline-block">
                            <h3 className="text-4xl md:text-7xl font-bold tracking-tighter">SEP . 06</h3>
                            <p className="text-sm md:text-xl tracking-widest uppercase mt-2">Let's Celebrate</p>
                        </div>
                    </motion.div>
                </div>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
            </motion.div>
        </section>
    );
};

export default Hero;
