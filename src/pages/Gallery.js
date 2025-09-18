import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArtworkCard from '../components/ArtworkCard';
import { artworks } from '../data/mockData';

const Gallery = () => {
  const navigate = useNavigate();

  const handleArtworkClick = (artwork) => {
    navigate('/contact', { state: { selectedArtwork: artwork } });
  };

  return (
    <div className="min-h-screen py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Art Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artworks.map(artwork => (
            <ArtworkCard 
              key={artwork.id} 
              artwork={artwork} 
              onClick={handleArtworkClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;