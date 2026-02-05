import { useState, useEffect } from 'react';
import { MOCK_GAMES, MOCK_CLIENT_PROJECTS } from '../data/mockData';

export const useAllPortfolioItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Fetch from multiple sources (simulated)
    const games = MOCK_GAMES.filter(g => g.isVisible);
    const clientWork = MOCK_CLIENT_PROJECTS;

    // 2. Normalize Data (Ensure everything has common fields for the UI)
    const normalizedGames = games.map(g => ({
      ...g,
      type: 'game', // Tagging the source
      link: `/game/${g.slug}`,
      displaySize: 'landscape' // Games are usually landscape
    }));

    const normalizedClient = clientWork.map(c => ({
      ...c,
      type: 'client',
      link: `/client/${c.slug}`,
      // Client work might keep its own displaySize (portrait/landscape)
    }));

    // 3. Merge and Sort by Date
    const merged = [...normalizedGames, ...normalizedClient].sort((a, b) => b.createdAt - a.createdAt);

    setItems(merged);
    setLoading(false);
  }, []);

  return { items, loading };
};