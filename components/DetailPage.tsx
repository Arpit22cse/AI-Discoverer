'use client';
import React, { useMemo, useCallback } from "react";
import { AITool } from "@/types/types";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronUp,
  Rocket,
  Terminal,
  DollarSign,
} from "lucide-react";
import AI_TOOLS_DATA from "@/data/data";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

const DetailPage: React.FC<{ tool: AITool }> = ({ tool }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const router = useRouter();

  const relatedTools = useMemo(() => {
    return AI_TOOLS_DATA
      .filter((t: AITool) => t.category === tool.category && t.id !== tool.id)
      .slice(0, 4);
  }, [tool]);

  const handleRelatedToolSelect = useCallback(
    (id: number) => {
      window.scrollTo(0, 0);
      router.push(`/tool/${id}`);
    },
    [router]
  );

  const gotoHome = () => router.push("/");

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className="py-10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button
          onClick={gotoHome}
          className={`flex items-center ${
            isDark
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-700"
          } font-medium mb-8 transition-colors`}
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to All Agents
        </button>

        
        <div
          className={`${
            isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
          } p-8 rounded-3xl shadow-xl border`}
        >
          <div className="flex items-center space-x-6">
            <div
              className={`p-4 rounded-xl ${
                isDark
                  ? "bg-blue-800/50 text-blue-300"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              <Image
                src={tool.logo}
                width={48}
                height={48}
                alt={`${tool.name} logo`}
              />
            </div>

            <div>
              <h1
                className={`text-4xl font-extrabold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {tool.name}
              </h1>

              <div className="flex items-center space-x-2 mt-2">
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    isDark
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tool.category} Agent
                </span>

                
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    isDark
                      ? "bg-green-900/40 text-green-300"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  💲 {tool.pricing || "Free"}
                </span>
              </div>
            </div>
          </div>

          
          <p
            className={`mt-6 text-xl ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {tool.description}
          </p>

          
          <div
            className={`mt-8 flex items-center justify-between border-t ${
              isDark ? "border-gray-700" : "border-gray-100"
            } pt-6`}
          >
            <div
              className={`flex items-center space-x-2 ${
                isDark ? "text-green-400" : "text-green-600"
              } font-semibold text-lg`}
            >
              <ChevronUp size={20} />
              <span>{tool.upvotes} Upvotes</span>
            </div>

            <a href={tool.productHuntUrl} target="_blank">
              <motion.button
                className="flex items-center space-x-2 text-md font-semibold bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-600/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Rocket size={20} />
                <span>View on Product Hunt</span>
              </motion.button>
            </a>
          </div>
        </div>

        
        <div
          className={`mt-12 ${
            isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
          } p-8 rounded-3xl shadow-xl border`}
        >
          <h2
            className={`text-3xl font-bold flex items-center mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <Terminal size={28} className="text-blue-500 mr-3" />
            How to Use {tool.name}
          </h2>

          <ol className="space-y-4">
            {tool.howToUse.map((step, index) => (
              <li key={index} className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-blue-600 rounded-full font-bold">
                  {index + 1}
                </div>
                <p
                  className={`text-lg ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>

        
        <div
          className={`mt-12 ${
            isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
          } p-8 rounded-3xl shadow-xl border`}
        >
          <h2
            className={`text-3xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Pricing
          </h2>

          <div
            className={`flex items-center text-lg font-medium px-4 py-3 rounded-xl inline-flex
              ${
                isDark
                  ? "bg-green-900/30 text-green-300"
                  : "bg-green-100 text-green-700"
              }`}
          >
            <DollarSign size={22} className="mr-2" />
            {tool.pricing || "Free"}
          </div>
        </div>

        
        {relatedTools.length > 0 && (
          <div className="mt-12">
            <h2
              className={`text-3xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Related {tool.category} Agents
            </h2>

            <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
              {relatedTools.map((relatedTool) => (
                <motion.div
                  key={relatedTool.id}
                  className={`min-w-[300px] p-5 cursor-pointer rounded-xl shadow-md border transition-all duration-300 
                    ${
                      isDark
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-100"
                    }`}
                  whileHover={{ y: -5 }}
                  onClick={() => handleRelatedToolSelect(relatedTool.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isDark
                          ? "bg-blue-900/30 text-blue-400"
                          : "bg-blue-50 text-blue-500"
                      }`}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={relatedTool.logo}
                        alt=""
                      />
                    </div>

                    <h4
                      className={`text-lg font-bold ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {relatedTool.name}
                    </h4>
                  </div>

                  <p
                    className={`mt-2 text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {relatedTool.description.substring(0, 70)}...
                  </p>

                  <div
                    className={`mt-3 flex justify-between text-sm font-semibold
                      ${
                        isDark ? "text-green-400" : "text-green-600"
                      }`}
                  >
                    <span>{relatedTool.category}</span>
                    <span>{relatedTool.upvotes} Upvotes</span>
                  </div>

                  
                  <div
                    className={`mt-2 inline-block text-xs px-2 py-1 rounded-md 
                      ${
                        isDark
                          ? "bg-green-900/40 text-green-300"
                          : "bg-green-100 text-green-700"
                      }`}
                  >
                    {relatedTool.pricing || "Free"}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DetailPage;
