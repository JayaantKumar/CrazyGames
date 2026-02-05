import React from 'react';
import * as FM from "framer-motion";
import { useGames } from '../hooks/useGames';
import GameCard from '../components/GameCard';

const { motion } = FM;

const Home = () => {
  const { games, loading } = useGames();

  if (loading) return <div className="text-white text-center p-20">Loading crazy world...</div>;

  // Hero logic: Get the first game as the featured one
  const featuredGame = games[0]; 

  return (
    <div className="min-h-screen pb-20">
      {/* Dynamic Hero Section */}
      {featuredGame && (
        <div className="relative h-[60vh] w-full overflow-hidden flex items-end">
            {/* Background */}
            <div className="absolute inset-0">
                <img src={featuredGame.bannerUrl} className="w-full h-full object-cover" alt="Hero" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1014] via-[#0f1014]/50 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 pb-12">
                <motion.h1 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-5xl md:text-7xl font-black text-white mb-4"
                >
                    {featuredGame.title}
                </motion.h1>
                <p className="text-gray-300 text-xl mb-6 max-w-2xl">{featuredGame.description}</p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold text-lg transition-transform hover:scale-105">
                    Play Now
                </button>
            </div>
        </div>
      )}

      {/* Game Grid */}
      <div className="container mx-auto px-6 mt-12">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">New Games</h2>
            <button className="text-purple-400 hover:text-purple-300">View All</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;