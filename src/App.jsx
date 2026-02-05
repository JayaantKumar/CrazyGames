import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import GameDetail from './pages/GameDetail';
import Portfolio from './pages/Portfolio';
import CategoryPage from './pages/CategoryPage'; // Import the new page
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-[#0f1014] min-h-screen text-white">
        <Navbar />
        <Sidebar />
        
        <main className="lg:pl-64 min-h-screen transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/game/:slug" element={<GameDetail />} />
            <Route path="/contact" element={<Contact />} />

            {/* NEW ROUTES START HERE */}
            <Route path="/new" element={<CategoryPage />} />
            <Route path="/trending" element={<CategoryPage />} />
            <Route path="/originals" element={<CategoryPage />} />
            <Route path="/multiplayer" element={<CategoryPage />} />
            <Route path="/recent" element={<div className="pt-24 text-center">Recently Played Feature Coming Soon</div>} />
            
            {/* Dynamic Route for all genres (e.g., /c/action, /c/car) */}
            <Route path="/c/:category" element={<CategoryPage />} />
            {/* NEW ROUTES END HERE */}
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;