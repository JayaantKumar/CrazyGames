import React from 'react';
import * as FM from "framer-motion";
import { Play, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmartImage from './SmartImage';

const { motion } = FM;

const GameCard = ({ game }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-[#1b1e24] rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-purple-500/50"
    >
      {/* Image Container */}
      <div className="h-48 w-full overflow-hidden">
        <SmartImage src={game.bannerUrl} alt={game.title} className="h-full w-full" />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20">
          <Link to={`/game/${game.slug}`} className="bg-purple-600 p-3 rounded-full text-white hover:bg-purple-500 transition-colors">
            <Play size={24} fill="white" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start">
            <h3 className="text-white font-bold text-lg truncate">{game.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
            {game.tags.map(tag => (
                <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;