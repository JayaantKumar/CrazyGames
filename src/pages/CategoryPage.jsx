import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useGames } from '../hooks/useGames';
import VideoGameCard from '../components/VideoGameCard';
import { Gamepad2 } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams(); // Gets 'action' from /c/action
  const { pathname } = useLocation(); // Gets full path like /new or /trending
  const { games, loading } = useGames();

  // Logic to filter games based on the current URL
  const filteredGames = useMemo(() => {
    if (loading || !games) return [];

    // 1. Handle "New" Page
    if (pathname === '/new') {
      return games.filter(g => g.isNew);
    }

    // 2. Handle "Trending" Page
    if (pathname === '/trending') {
      return games.filter(g => g.isHot);
    }
    
    // 3. Handle "Originals" (Mock logic: assume we are the developer)
    if (pathname === '/originals') {
      return games.filter(g => g.tags.includes('Original'));
    }

    // 4. Handle "Multiplayer"
    if (pathname === '/multiplayer') {
      return games.filter(g => g.tags.some(tag => tag.toLowerCase() === 'multiplayer'));
    }

    // 5. Handle Generic Categories (/c/:category)
    if (category) {
      // Capitalize first letter for comparison (action -> Action)
      const targetTag = category.charAt(0).toUpperCase() + category.slice(1);
      return games.filter(g => g.tags.includes(targetTag));
    }

    return [];
  }, [pathname, category, games, loading]);

  // Determine Title
  const getTitle = () => {
    if (pathname === '/new') return 'New Releases';
    if (pathname === '/trending') return 'Trending Now';
    if (pathname === '/originals') return 'Originals';
    if (pathname === '/multiplayer') return 'Multiplayer Games';
    return category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Games` : 'Games';
  };

  if (loading) return <div className="p-20 text-center text-gray-500">Loading...</div>;

  return (
    <div className="p-6 pt-24 min-h-screen">
      <div className="mb-8 border-b border-gray-800 pb-4">
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
           <Gamepad2 className="text-purple-500" size={32} />
           {getTitle()}
        </h1>
        <p className="text-gray-400 mt-2">
          Found {filteredGames.length} games in this category.
        </p>
      </div>

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {filteredGames.map((game) => (
            <VideoGameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#1b1e24] rounded-xl border border-dashed border-gray-700">
          <h3 className="text-xl text-gray-300 font-bold mb-2">No games found here yet!</h3>
          <p className="text-gray-500">Try adding more games with the tag "{category || 'this category'}" in your database.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;