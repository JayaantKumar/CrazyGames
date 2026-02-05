export const MOCK_CONFIG = {
  siteTagline: "Play. Create. Conquer.",
  newReleaseLimit: 8,
  ourGamesLimit: 12,
  contactEmail: "admin@crazygames-clone.com",
};

export const MOCK_GAMES = [
  {
    id: "1",
    title: "Cyber Racer 2077",
    slug: "cyber-racer-2077",
    description: "High speed racing in a neon future.",
    isVisible: true,
    bannerUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    tags: ["Racing", "3D", "WebGL"],
    createdAt: Date.now(),
  },
  {
    id: "2",
    title: "Dungeon Clicker",
    slug: "dungeon-clicker",
    description: "An addictive idle RPG.",
    isVisible: true,
    bannerUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    tags: ["RPG", "Idle"],
    createdAt: Date.now() - 100000,
  },
  // Add more items to test scrolling...
  {
    id: "3",
    title: "Space Marines",
    slug: "space-marines",
    description: "Defend the galaxy.",
    isVisible: true,
    bannerUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
    tags: ["Action", "Shooter"],
    createdAt: Date.now() - 200000,
  },
];

export const MOCK_CLIENT_PROJECTS = [
  {
    id: "c1",
    title: "Client Dashboard UI",
    slug: "client-dashboard",
    clientUrl: "https://example.com",
    bannerUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["UI/UX", "React"],
    displaySize: "landscape",
    createdAt: Date.now(),
  }
];