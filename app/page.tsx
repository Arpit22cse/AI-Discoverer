'use client';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Search, Tags, Filter, TrendingUp, Zap, Users, Code, PenTool, LayoutDashboard, Compass, Loader, GitBranch, Video, Music, BookOpen, Palette, Image } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {Category, AITool, SortOption} from '@/types/types';
import AI_TOOLS_DATA from '@/data/data';
import CategoryChip from '@/components/CategoryChip';
import ToolCard from '@/components/ToolCard';
import HeroSlider from '@/components/HeroSlider';
import { useTheme } from '@/contexts/ThemeContext';



const CATEGORIES: Category[] = ['All', 'Writing', 'Design', 'Development', 'Marketing', 'Productivity', 'Video', 'Audio', 'Research', 'SEO', 'Image'];
const SORT_OPTIONS: SortOption[] = ['Upvotes (High to Low)', 'Name (A-Z)'];

const categoryIconMap: Record<Exclude<Category, "All">, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Writing: PenTool,
  Design: Palette,
  Development: Code,
  Marketing: Users,
  Productivity: LayoutDashboard,
  Video: Video,
  Audio: Music,
  Research: BookOpen,
  SEO: Search,
  Image: Image,
};


const HomePage: React.FC = () => {
  
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortOption, setSortOption] = useState('Upvotes (High to Low)');

    
    const ITEMS_TO_LOAD = 9; 
    const [visibleCount, setVisibleCount] = useState(ITEMS_TO_LOAD);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const {theme} = useTheme();

    useEffect(() => {
    console.log('Current theme:', theme);
    console.log('HTML classList:', document.documentElement.classList.value);
}, [theme]);


    
    const filteredAndSortedTools = useMemo(() => {
       
        setVisibleCount(ITEMS_TO_LOAD);
        setHasMore(true);

        let filteredList = AI_TOOLS_DATA;

        
        if (selectedCategory !== 'All') {
            filteredList = filteredList.filter((tool) => tool.category === selectedCategory);
        }

        
        if (searchTerm) {
            const lowerSearchTerm = searchTerm.toLowerCase();
            filteredList = filteredList.filter((tool) =>
                tool.name.toLowerCase().includes(lowerSearchTerm) ||
                tool.description.toLowerCase().includes(lowerSearchTerm)
            );
        }

        
        filteredList.sort((a, b) => {
            if (sortOption === 'Upvotes (High to Low)') {
                return b.upvotes - a.upvotes;
            }
            if (sortOption === 'Name (A-Z)') {
                return a.name.localeCompare(b.name);
            }
            return 0;
        });

        return filteredList;
    }, [searchTerm, selectedCategory, sortOption]);

    
    const visibleTools = useMemo(() => {
        
        const list = filteredAndSortedTools;
        
        
        if (visibleCount >= list.length) {
            setHasMore(false);
        } else {
            setHasMore(true);
        }

        return list.slice(0, visibleCount);
    }, [filteredAndSortedTools, visibleCount]);

    
    const loadMore = useCallback(() => {
        if (!hasMore || isLoadingMore) return;
        
        setIsLoadingMore(true);
        
        
        setTimeout(() => {
            setVisibleCount(prevCount => Math.min(prevCount + ITEMS_TO_LOAD, filteredAndSortedTools.length));
            setIsLoadingMore(false);
        }, 3000); 
    }, [hasMore, isLoadingMore, filteredAndSortedTools.length]);


    
    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 700; 
            const isNearBottom = (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - scrollThreshold
            );

            
            setShowScrollToTop(document.documentElement.scrollTop > 300);

            if (isNearBottom && !isLoadingMore && hasMore) {
                loadMore();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoadingMore, hasMore, loadMore]);


    const handleCategorySelect = useCallback((category: Category) => {
        
        setSelectedCategory(prev => (prev === category ? 'All' : category));
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`min-h-screen font-inter ${(theme!=="dark")? "bg-gray-50" : "bg-gray-900"} transition-colors duration-300`}>
            
            <header className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className={`text-4xl font-extrabold ${(theme!=="dark")? "text-gray-900" : "text-white"} flex items-center`}>
                            <Zap className="w-8 h-8 text-blue-600 mr-3" />
                            Infinite Scroll Showcase
                        </h1>
                        <p className={`mt-2 text-xl ${(theme!=="dark")? "text-gray-500" : "text-gray-400"}`}>
                            The best AI tools, now with a smooth infinite scrolling experience.
                        </p>
                    </motion.div>

                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-8 relative"
                    >
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for agents (e.g., 'code generation', 'marketing')"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 text-lg shadow-lg ${(theme!=="dark")? "bg-white text-gray-900" : "bg-gray-700 text-white"} dark:border-gray-600`}
                        />
                    </motion.div>
                </div>
            </header>

            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <HeroSlider />
            </div>

            <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                
                <div className={`flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 mb-8 p-4 ${(theme!=="dark")? "bg-white border-gray-100" : "bg-gray-800 border-gray-700"} rounded-xl shadow-md border`}>
                    
                    
                    <div className="flex flex-wrap items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        <Tags className="w-5 h-5 text-blue-600 mr-1 flex-shrink-0" />
                        {CATEGORIES.map(category => (
                            <CategoryChip
                                key={category}
                                label={category}
                                icon={category === 'All' ? Compass : categoryIconMap[category]}
                                selected={selectedCategory === category}
                                onClick={() => handleCategorySelect(category)}
                            />
                        ))}
                    </div>

                   
                    <div className="flex items-center space-x-3 flex-shrink-0">
                        <Filter className="w-5 h-5 text-blue-600" />
                        <label htmlFor="sort" className={`text-md font-semibold ${(theme!=="dark")? "text-gray-700" : "text-gray-300"} hidden sm:block`}>Sort By:</label>
                        <select
                            id="sort"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className={`py-2 pl-3 pr-10 border border-gray-300 rounded-lg text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 ${(theme!=="dark")? "bg-white text-gray-900" : "bg-gray-700 text-white"} dark:border-gray-600`}
                        >
                        {SORT_OPTIONS.map(option => (
                            <option key={option} value={option}>
                            {option}
                            </option>
                        ))}
                        </select>
                    </div>
                </div>

                
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {visibleTools.map((tool, index) => (
                            <motion.div
                                key={tool.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.05, 
                                    ease: "easeOut",
                                }}
                            >
                                <ToolCard tool={tool} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>


               
                <AnimatePresence>
                    {isLoadingMore && (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="flex flex-col justify-center items-center py-12"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, ease: "linear", repeat: Infinity }}
                                className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/30"
                            >
                                <Loader className="w-8 h-8 text-blue-600" />
                            </motion.div>
                            <h3 className={`mt-4 text-xl font-bold ${(theme!=="dark")? "text-gray-800" : "text-white"}`}>Fetching the next batch...</h3>
                            <p className={`text-sm ${(theme!=="dark")? "text-gray-500" : "text-gray-400"} mt-1`}>{`(Simulating 0.8s network delay for effect)`}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                
                {!hasMore && filteredAndSortedTools.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`text-center py-10 ${(theme!=="dark")? "text-gray-500" : "text-gray-400"} font-semibold`}
                    >
                        <p className="flex items-center justify-center">
                            <Tags className="w-5 h-5 mr-2" />
                            You've reached the end of the current list of {filteredAndSortedTools.length} tools!
                        </p>
                    </motion.div>
                )}
            </main>

            
            <AnimatePresence>
                {showScrollToTop && (
                    <motion.button
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onClick={scrollToTop}
                        className={`fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800`}
                    >
                        <Zap className="w-5 h-5" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};
export default HomePage;



