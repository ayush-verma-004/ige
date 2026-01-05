import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Clock, Star, Heart } from 'lucide-react';

const timelineData = [
    {
        icon: Calendar,
        date: '6 September',
        title: 'Two strangers. One shared room.',
        description: 'The beginning of an unexpected journey.',
        color: 'bg-peach',
    },
    {
        icon: Clock,
        date: 'After Some Time',
        title: 'Late-night talks, shared laughter.',
        description: 'Silent understanding grew between the noise of life.',
        color: 'bg-lavender',
    },
    {
        icon: Star,
        date: 'Now',
        title: 'Not just roommates...',
        description: 'But souls who feel like home.',
        color: 'bg-softpink',
    },
];

const TimelineItem = ({ data, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-8 mb-24 w-full max-w-5xl mx-auto px-4 ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Content */}
            <div className={`flex-1 text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                <div className="inline-block p-4 bg-white rounded-lg shadow-lg border border-gray-50 transform hover:-translate-y-1 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-500 mb-2">{data.date}</span>
                    <h3 className="text-2xl font-handwriting text-slate-800 mb-2">{data.title}</h3>
                    <p className="text-slate-600 font-light">{data.description}</p>
                </div>
            </div>

            {/* Center Icon */}
            <div className="relative z-10 flex-shrink-0">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${data.color} flex items-center justify-center shadow-lg border-4 border-offwhite`}>
                    <data.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
            </div>

            {/* Spacer for opposite side */}
            <div className="flex-1 hidden md:block" />
        </motion.div>
    );
};

const Timeline = () => {
    // Scroll progress for vertical line
    // We need a ref for the container to track scroll relative to it, but global scroll implies simple height div

    return (
        <section className="py-20 bg-offwhite relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent" />

            <div className="container mx-auto">
                {timelineData.map((item, index) => (
                    <TimelineItem key={index} data={item} index={index} />
                ))}

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12 relative z-10"
                >
                    <div className="p-4 bg-white rounded-full shadow-xl">
                        <Heart className="w-8 h-8 text-red-400 fill-current animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Timeline;
