import React from 'react';
import { motion } from 'framer-motion';
import videoSource from '../video/video.mp4';

const VideoSection = () => {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center p-8 bg-offwhite relative z-10">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full max-w-sm md:max-w-md bg-white p-2 md:p-6 rounded-sm shadow-2xl rotate-1 hover:rotate-0 transition-all duration-700 ease-in-out border border-gray-100"
            >
                <div className="aspect-[9/16] bg-gray-900 rounded-sm overflow-hidden flex items-center justify-center shadow-inner relative group">
                    <video
                        src={videoSource}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transform -rotate-90 scale-[1.78]"
                    />
                </div>
            </motion.div>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 text-2xl md:text-3xl font-handwriting text-slate-600 text-center"
            >
                “Some memories are better felt than explained.”
            </motion.p>
        </section>
    );
};

export default VideoSection;
