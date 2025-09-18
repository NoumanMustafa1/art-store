import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();
  const selectedArtwork = location.state?.selectedArtwork;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    artworkReference: selectedArtwork ? `${selectedArtwork.title} (ID: ${selectedArtwork.id})` : ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '', artworkReference: '' });
  };

  return (
    <div className="min-h-screen py-16 bg-secondary">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Contact Us</h1>
        
        {selectedArtwork && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-blue-800">
              <strong>Inquiry about:</strong> {selectedArtwork.title} - {selectedArtwork.price}
            </p>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            
            {selectedArtwork && (
              <div>
                <label htmlFor="artworkReference" className="block text-sm font-medium text-gray-700 mb-2">
                  Artwork Reference
                </label>
                <input
                  type="text"
                  id="artworkReference"
                  name="artworkReference"
                  value={formData.artworkReference}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  readOnly
                />
              </div>
            )}
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Tell us about your inquiry..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-accent hover:bg-blue-600 text-white py-3 px-4 rounded-md transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;