import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f1014]/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-purple-500 pl-12 lg:pl-0"> 
        {/* Added pl-12 to avoid overlap with sidebar on mobile if needed */}
          <Gamepad2 size={32} />
          <span className="text-white font-black text-xl tracking-tighter">CRAZYCLONE</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-300 hover:text-white font-medium hidden md:block">Home</Link>
          <Link to="/portfolio" className="text-gray-300 hover:text-white font-medium hidden md:block">Portfolio</Link>
          
          {/* UPDATED CONTACT BUTTON */}
          <Link to="/contact">
            <button className="bg-white/10 hover:bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all border border-white/5 hover:border-purple-500">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;