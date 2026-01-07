import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-offwhite text-slate-500 text-center relative overflow-hidden">
            <div className="flex items-center justify-center gap-3">
                <p className="text-sm font-handwriting tracking-widest opacity-80 hover:opacity-100 transition-all duration-500 cursor-default hover:text-primary hover:tracking-[0.2em]">
                    crafted quietly by ayush
                </p>
                <a
                    href="https://www.instagram.com/igedtx?igsh=MWRhb29paDRweGkyZw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
                    aria-label="Contact on Instagram"
                >
                    <Instagram size={18} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
