import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const VideoGameCard = ({ game }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const hoverTimeout = useRef(null);

  // Helper to extract Video ID from standard YouTube URLs
  const getYoutubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYoutubeId(game.youtubeUrl);

  // Delay video loading slightly to prevent flickering if user scrolls fast
  const handleMouseEnter = () => {
    setIsHovered(true);
    hoverTimeout.current = setTimeout(() => setShowVideo(true), 400); // 400ms delay
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowVideo(false);
    clearTimeout(hoverTimeout.current);
  };

  return (
    <div 
      className="relative aspect-video rounded-xl overflow-hidden bg-[#1b1e24] cursor-pointer group shadow-md hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 ring-1 ring-white/5 hover:ring-purple-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/game/${game.slug}`} className="block w-full h-full">
        
        {/* State 1: Video Playing (Only if hovered + valid video ID) */}
        {showVideo && videoId ? (
          <div className="absolute inset-0 z-20 bg-black">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}&showinfo=0`}
              title={game.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full scale-125 pointer-events-none" // Scale 125 zooms in slightly to hide youtube UI controls
            />
          </div>
        ) : (
          /* State 2: Static Image */
          <div className="absolute inset-0 z-10">
             <img 
               src={game.bannerUrl} 
               alt={game.title} 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
             />
             {/* Dark overlay that fades out on hover */}
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
          </div>
        )}

        {/* Badges (Hot, New) - Absolute Top Left */}
        {game.isHot && (
            <div className="absolute top-2 left-2 z-30 bg-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wide shadow-sm">
                HOT
            </div>
        )}

        {/* Title Overlay (Bottom) - Disappears when video plays to be cleaner */}
        <div className={`absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/90 to-transparent z-30 transition-opacity duration-300 ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
           <h3 className="text-white text-sm font-bold truncate drop-shadow-md">{game.title}</h3>
           <p className="text-gray-300 text-xs truncate">{game.tags?.[0] || "Arcade"}</p>
        </div>

      </Link>
    </div>
  );
};

export default VideoGameCard;