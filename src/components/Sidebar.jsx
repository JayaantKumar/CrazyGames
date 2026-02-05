import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Clock, Zap, Flame, Trophy, Users, 
  Sword, Map, Dribbble, Car, Ghost, Dice5, 
  Gamepad2, Cpu, Grid 
} from 'lucide-react';

const Sidebar = () => {
  const categories = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Recently Played', icon: Clock, path: '/recent' },
    { name: 'New', icon: Zap, path: '/new' },
    { name: 'Trending', icon: Flame, path: '/trending', highlight: true },
    { name: 'Originals', icon: Trophy, path: '/originals' },
    { name: 'Multiplayer', icon: Users, path: '/multiplayer' },
  ];

  const genres = [
    { name: 'Action', icon: Sword, path: '/c/action' },
    { name: 'Adventure', icon: Map, path: '/c/adventure' },
    { name: 'Basketball', icon: Dribbble, path: '/c/basketball' },
    { name: 'Bike', icon: Ghost, path: '/c/bike' },
    { name: 'Car', icon: Car, path: '/c/car' },
    { name: 'Casual', icon: Dice5, path: '/c/casual' },
    { name: 'Controller', icon: Gamepad2, path: '/c/controller' },
    { name: 'Driving', icon: Car, path: '/c/driving' },
    { name: 'Simulation', icon: Cpu, path: '/c/simulation' },
    { name: 'Puzzle', icon: Grid, path: '/c/puzzle' },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 pt-20 pb-10 bg-[#0f1014] border-r border-gray-800 overflow-y-auto hidden lg:block custom-scrollbar z-40">
      <div className="px-4 space-y-6">
        
        {/* Main Categories */}
        <div className="space-y-1">
          {categories.map((item) => (
            <NavLink 
              key={item.name} 
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm
                ${isActive ? 'bg-[#6c5ce7] text-white shadow-lg shadow-purple-900/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'}
              `}
            >
              <item.icon size={20} className={item.highlight ? "text-orange-500" : ""} />
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="h-px bg-gray-800 mx-2" />

        {/* Genres List */}
        <div>
           <h3 className="px-4 mb-3 text-xs font-black text-gray-500 uppercase tracking-wider">Genres</h3>
           <div className="space-y-1">
            {genres.map((item) => (
                <NavLink 
                key={item.name} 
                to={item.path}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
                >
                <item.icon size={18} />
                {item.name}
                </NavLink>
            ))}
           </div>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;