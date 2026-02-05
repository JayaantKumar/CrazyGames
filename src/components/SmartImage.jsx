import React, { useState } from 'react';
import { clsx } from 'clsx';

const SmartImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={clsx("relative overflow-hidden bg-gray-800", className)}>
      {/* Blurred Background Layer (fills gaps) */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 scale-110"
      />
      
      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={clsx(
          "relative w-full h-full object-cover transition-opacity duration-500 z-10",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};

export default SmartImage;