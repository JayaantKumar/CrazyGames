import { useState, useEffect } from 'react';
import { MOCK_GAMES, MOCK_CONFIG } from '../data/mockData';

// NOTICE: The word "export" is required here!
export const useGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API Fetch
    const fetchGames = () => {
      if (!MOCK_GAMES) {
        setGames([]);
        setLoading(false);
        return;
      }

      // Logic: Filter isVisible -> Sort by Date -> Slice by Limit
      const sorted = MOCK_GAMES
        .filter(g => g.isVisible)
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(0, MOCK_CONFIG?.ourGamesLimit || 10);
      
      setGames(sorted);
      setLoading(false);
    };

    fetchGames();
  }, []);

  return { games, loading };
};