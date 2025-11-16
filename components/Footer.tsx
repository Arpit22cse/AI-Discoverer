'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const Footer: React.FC = () => {
    const { theme } = useTheme();
    return (
        <motion.footer
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`py-4 mt-12 border-t ${theme === "dark" ? "border-gray-800 bg-gray-900 text-gray-400" : "border-gray-100 bg-white text-gray-500"} text-center text-sm transition-colors duration-300`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            Built with React, TypeScript, Tailwind, Lucide, and Framer Motion for a seamless experience.
            <div className="mt-1 text-xs">Features include easy navigation, automatic component motion, and dark mode capability.</div>
        </div>
    </motion.footer>
)
};
export default Footer;