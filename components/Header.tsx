'use client';
import {motion} from 'framer-motion';
import {Rocket, Sun, Moon} from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';    
import { useTheme } from '@/contexts/ThemeContext';


const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();
    

    const goToHome = () => {
        router.push('/');
        window.scrollTo(0, 0);
    };
    return (
     
    <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 shadow-lg ${theme === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"}`}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <button onClick={goToHome} className={`flex items-center space-x-2 text-xl font-extrabold ${theme === "dark" ? "text-white" : "text-gray-900"} transition-colors duration-300`}>
                <Rocket className="w-6 h-6 text-blue-600" />
                <span>AI Discovery</span>
            </button>
            <div className="flex items-center space-x-4">
                <p className={`text-sm hidden sm:block ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    {theme === 'dark' ? 'Dark Mode Active' : 'Light Mode Active'}
                </p>
                <motion.button
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-700"} transition-colors duration-300`}
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </motion.button>
            </div>
        </div>
    </motion.header>
    
)};
export default Header;