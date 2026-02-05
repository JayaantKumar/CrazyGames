import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import GameDetail from './pages/GameDetail';
import Footer from './components/Footer'; // See below

function App() {
  return (
    <Router>
      <div className="bg-[#0f1014] min-h-screen text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/game/:slug" element={<GameDetail />} />
            {/* Route path="/client/:slug" can reuse GameDetail or have its own */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;