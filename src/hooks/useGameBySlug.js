import { useState, useEffect } from 'react';
import { MOCK_GAMES } from '../data/mockData';

export const useGameBySlug = (slug) => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Logic: Find the game in the array that matches the slug
    const found = MOCK_GAMES.find(g => g.slug === slug);
    
    // Simulate network delay for realism
    setTimeout(() => {
      setGame(found || null);
      setLoading(false);
    }, 300);
  }, [slug]);

  return { game, loading };
};