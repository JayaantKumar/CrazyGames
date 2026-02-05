import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f1014]/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-purple-500">
          <Gamepad2 size={32} />
          <span className="text-white font-black text-xl tracking-tighter">CRAZYCLONE</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-300 hover:text-white font-medium">Home</Link>
          <Link to="/portfolio" className="text-gray-300 hover:text-white font-medium">Portfolio</Link>
          <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;