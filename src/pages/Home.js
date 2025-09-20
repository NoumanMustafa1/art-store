import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArtworkCard from '../components/ArtworkCard';
import { artworks } from '../data/mockData';

const Home = () => {
  const navigate = useNavigate();
  const newArrivals = artworks.filter(art => art.isNewArrival);
  const featured = artworks.slice(0, 3);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % featured.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featured.length]);

  const handleArtworkClick = (artwork) => {
    navigate('/contact', { state: { selectedArtwork: artwork } });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${featured[currentImage]?.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to The Picture Store</h1>
            <p className="text-xl mb-8">Discover extraordinary art that speaks to your soul</p>
            <Link 
              to="/gallery" 
              className="bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg transition-colors"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featured.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImage ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Exclusive New Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArrivals.map(artwork => (
              <ArtworkCard 
                key={artwork.id} 
                artwork={artwork} 
                onClick={handleArtworkClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map(artwork => (
              <ArtworkCard 
                key={artwork.id} 
                artwork={artwork} 
                onClick={handleArtworkClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Explore More</h2>
          <div className="flex justify-center space-x-8">
            <Link to="/gallery" className="hover:text-accent transition-colors text-lg">
              Full Gallery
            </Link>
            <Link to="/about" className="hover:text-accent transition-colors text-lg">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors text-lg">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;