import React from 'react';
import { useParams, Link } from 'react-router-dom';
import * as FM from "framer-motion";
import { useGameBySlug } from '../hooks/useGameBySlug';
import { ArrowLeft, Maximize2, Share2, ThumbsUp } from 'lucide-react';

const { motion } = FM;

const GameDetail = () => {
  const { slug } = useParams();
  const { game, loading } = useGameBySlug(slug);

  if (loading) return <div className="text-white text-center pt-32">Loading Game Data...</div>;
  if (!game) return <div className="text-white text-center pt-32">Game not found.</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20 px-4 md:px-8 pb-12"
    >
      {/* Breadcrumb / Back */}
      <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft size={20} className="mr-2" /> Back to Arcade
      </Link>

      {/* Main Layout: Game Window + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Column: The Game Player (Take up 3/4 space) */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* The Game Frame */}
          <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800 ring-1 ring-white/10">
            {/* If we had a real game URL, iframe goes here. For now, a placeholder image */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#111]">
                <img src={game.bannerUrl} className="opacity-30 absolute inset-0 w-full h-full object-cover" />
                <button className="relative z-10 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-black text-xl shadow-lg transition-transform hover:scale-105">
                    START GAME
                </button>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between bg-[#1b1e24] p-4 rounded-xl border border-gray-800">
            <h1 className="text-2xl font-bold text-white">{game.title}</h1>
            <div className="flex gap-3">
                <button className="p-2 hover:bg-white/10 rounded-full text-gray-300"><ThumbsUp size={20} /></button>
                <button className="p-2 hover:bg-white/10 rounded-full text-gray-300"><Share2 size={20} /></button>
                <button className="p-2 hover:bg-white/10 rounded-full text-gray-300"><Maximize2 size={20} /></button>
            </div>
          </div>

          {/* Description */}
          <div className="bg-[#1b1e24] p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-bold text-white mb-3">About this Game</h3>
            <p className="text-gray-400 leading-relaxed">{game.description}</p>
          </div>
        </div>

        {/* Right Column: Sidebar (Tags & Info) */}
        <div className="space-y-6">
          <div className="bg-[#1b1e24] p-6 rounded-xl border border-gray-800">
            <h3 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
                {game.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-md cursor-pointer transition-colors">
                        {tag}
                    </span>
                ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-white font-bold mb-2">Want a game like this?</h3>
            <p className="text-purple-200 text-sm mb-4">We build custom games for brands and events.</p>
            <Link to="/contact" className="block text-center bg-white text-purple-900 font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Hire Us
            </Link>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default GameDetail;