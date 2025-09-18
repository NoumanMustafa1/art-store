import React from 'react';

const ArtworkCard = ({ artwork, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
      onClick={() => onClick(artwork)}
    >
      <img 
        src={artwork.image} 
        alt={artwork.title}
        className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary mb-2">{artwork.title}</h3>
        <p className="text-gray-600 mb-2">{artwork.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-accent">{artwork.price}</span>
          {artwork.isNewArrival && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
              New
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;