'use client';
import React from "react";
import { AITool } from "@/types/types";
import { motion } from "framer-motion";
import { Award, ChevronUp, DollarSign } from "lucide-react";
import { useTheme } from '@/contexts/ThemeContext';
import { useRouter } from "next/navigation";
import Image from "next/image";

const ToolCard: React.FC<{ tool: AITool }> = ({ tool }) => {
  const { theme } = useTheme();
  const router = useRouter();

  const isDark = theme === "dark";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onClick={() => router.push(`/tool/${tool.id}`)}
      whileHover={{ scale: 1.03 }}
      className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border shadow-xl overflow-hidden
          ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
      `}
    >
      
      <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-20 transition-opacity bg-gradient-to-br from-blue-400 to-purple-500" />

      
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-xl shadow-sm
            ${isDark ? "bg-gray-700" : "bg-blue-50"}
        `}>
          <Image
            width={32}
            height={32}
            src={tool.logo}
            alt={`${tool.name} logo`}
            className="rounded-md object-contain"
          />
        </div>

        <div>
          <h3 className={`text-lg sm:text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            {tool.name}
          </h3>

          
          <span
            className={`text-xs px-2 py-1 rounded-lg mt-1 inline-block
                ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}
            `}
          >
            {tool.category}
          </span>
        </div>
      </div>

      
      <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        {tool.description.substring(0, 110)}...
      </p>

      
      <div
        className={`mt-5 pt-4 flex items-center justify-between border-t
            ${isDark ? "border-gray-700" : "border-gray-200"}
        `}
      >
        
        <div
          className={`flex items-center space-x-2 text-sm font-semibold px-3 py-1 rounded-lg 
              ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"}
          `}
        >
          <DollarSign size={15} />
          <span>{tool.pricing || "Free"}</span>
        </div>

        
        <motion.button
          className="flex items-center space-x-2 text-sm font-semibold bg-green-500 text-white px-4 py-2 rounded-lg shadow-md"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            window.open(tool.productHuntUrl, "_blank");
          }}
        >
          <ChevronUp size={16} />
          <span>{tool.upvotes}</span>
          <Award size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ToolCard;
