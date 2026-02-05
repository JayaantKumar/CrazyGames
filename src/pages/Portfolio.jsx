import React from 'react';
import * as FM from "framer-motion";
import { useAllPortfolioItems } from '../hooks/useAllPortfolioItems';
import SmartImage from '../components/SmartImage';
import { ArrowUpRight, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const { motion } = FM;

const Portfolio = () => {
  const { items, loading } = useAllPortfolioItems();

  if (loading) return <div className="text-white text-center pt-32">Loading Portfolio...</div>;

  return (
    <div className="min-h-screen pt-24 px-6 container mx-auto pb-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
          Creation <span className="text-purple-500">Vault</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          A mix of our internal game releases and commissioned client projects.
        </p>
      </div>

      {/* The Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`group relative rounded-2xl overflow-hidden border border-gray-800 bg-[#1b1e24] ${
              item.displaySize === 'portrait' ? 'row-span-2' : 'row-span-1'
            }`}
          >
            {/* Background Image */}
            <SmartImage 
              src={item.bannerUrl} 
              alt={item.title} 
              className="w-full h-full" 
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 bg-purple-600 text-xs font-bold rounded mb-2 uppercase tracking-wide text-white">
                  {item.type === 'game' ? 'Original Game' : 'Client Work'}
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                
                <Link 
                  to={item.link}
                  className="mt-4 inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  {item.type === 'game' ? <Gamepad2 size={18} /> : <ArrowUpRight size={18} />}
                  <span>View Project</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;