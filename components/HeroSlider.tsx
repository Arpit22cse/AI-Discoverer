'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, TrendingUp, LayoutDashboard, GitBranch, Rocket } from "lucide-react";
import {useTheme} from '@/contexts/ThemeContext';
const HERO_SLIDES = [
    { title: "Simplified Discovery", subtitle: "Find the exact AI agent you need in seconds.", icon: Search, color: "text-blue-500" },
    { title: "Smooth Experience", subtitle: "Framer Motion for fluid transitions and easy navigation.", icon: TrendingUp, color: "text-purple-500" },
    { title: "Cross-Platform Ready", subtitle: "Fully responsive dark/light mode layout for all devices.", icon: LayoutDashboard, color: "text-orange-500" },
    { title: "Automatic Updates", subtitle: "Design built for quick component reflow and maintenance.", icon: GitBranch, color: "text-green-500" },
];

const HeroSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const {theme} = useTheme();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
        }, 5000); 
        return () => clearInterval(timer);
    }, []);

    const slide = HERO_SLIDES[currentIndex];

    return (
        <div className={`mt-8 mb-12 p-8 ${theme === "dark" ? "bg-gray-800" : "bg-blue-50"} rounded-3xl shadow-xl overflow-hidden relative`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex flex-col md:flex-row items-center justify-between"
                >
                    <div className="md:w-3/5">
                        <h2 className={`text-4xl sm:text-5xl font-extrabold ${theme === "dark" ? "text-white" : "text-gray-900"} leading-tight`}>
                            Discover the Next Generation of AI Agents
                        </h2>
                        <p className={`mt-4 text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                            The future of work is automated. Explore over 20 hand-picked AI tools to supercharge your productivity in writing, design, and development.
                        </p>
                        
                        <div className="mt-6 flex items-center space-x-4">
                            <slide.icon size={30} className={slide.color} />
                            <div>
                                <h3 className={`text-xl font-bold ${slide.color}`}>{slide.title}</h3>
                                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{slide.subtitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0 md:w-2/5 flex justify-center">
                        <Rocket size={150} className={`text-blue-400 ${theme === "dark" ? "text-blue-500" : ""} opacity-70 transform rotate-45`} />
                    </div>
                </motion.div>
            </AnimatePresence>
            
        </div>
    );
};
export default HeroSlider;