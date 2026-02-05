import React from 'react';
import { useGames } from '../hooks/useGames';
import VideoGameCard from '../components/VideoGameCard';

const Home = () => {
  const { games, loading } = useGames();

  if (loading) return <div className="p-20 text-center text-gray-500">Loading Arcade...</div>;

  return (
    <div className="p-6 pt-24">
      {/* Featured Section (Optional - kept smaller now) */}
      <div className="mb-8">
        <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
           <span className="text-purple-500">Recommended</span> For You
        </h2>
      </div>

      {/* THE DENSE GRID */}
      {/* Grid adapts: 2 cols on mobile -> 3 -> 4 -> 5 -> 6 on huge screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {games.map((game) => (
          <VideoGameCard key={game.id} game={game} />
        ))}
        
        {/* Mocking extra cards to fill the UI for visual testing if you only have 1 game */}
        {games.length < 10 && games.map((game, i) => (
             <VideoGameCard key={`${game.id}-duplicate-${i}`} game={{...game, id: `${game.id}-${i}`}} />
        ))}
         {games.length < 10 && games.map((game, i) => (
             <VideoGameCard key={`${game.id}-duplicate-2-${i}`} game={{...game, id: `${game.id}-2-${i}`}} />
        ))}
      </div>
    </div>
  );
};

export default Home;