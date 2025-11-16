import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '@/types/types';
import { useTheme } from '@/contexts/ThemeContext';

interface ChipProps { label: Category; icon: React.FC<React.SVGProps<SVGSVGElement>>; selected: boolean; onClick: () => void; }

const CategoryChip: React.FC<ChipProps> = 
    ({ label, icon: Icon, selected, onClick }) => {
        const { theme } = useTheme();
        return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
                flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 shadow-md
                ${selected
                    ? 'bg-blue-600 text-white shadow-blue-500/50'
                    : `${theme !== "dark" ? "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200" : "bg-gray-700 text-gray-200 dark:hover:bg-gray-600 dark:border-gray-600"}`
                }
            `}
        >
            <Icon width={16} />
            <span>{label}</span>
        </motion.button>
        )
    };

export default CategoryChip;