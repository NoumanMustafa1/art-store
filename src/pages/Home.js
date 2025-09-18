import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArtworkCard from '../components/ArtworkCard';
import { artworks } from '../data/mockData';

const Home = () => {
  const navigate = useNavigate();
  const newArrivals = artworks.filter(art => art.isNewArrival);
  const featured = artworks.slice(0, 3);

  const handleArtworkClick = (artwork) => {
    navigate('/contact', { state: { selectedArtwork: artwork } });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to The Picture Store</h1>
          <p className="text-xl mb-8">Discover extraordinary art that speaks to your soul</p>
          <Link 
            to="/gallery" 
            className="bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg transition-colors"
          >
            Explore Gallery
          </Link>
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