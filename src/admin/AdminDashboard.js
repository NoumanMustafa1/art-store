import React, { useState } from 'react';
import { artworks, messages } from '../data/mockData';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [newArtwork, setNewArtwork] = useState({
    title: '',
    price: '',
    category: '',
    isNewArrival: false,
    image: ''
  });

  const handleArtworkSubmit = (e) => {
    e.preventDefault();
    alert('Artwork added successfully!');
    setNewArtwork({ title: '', price: '', category: '', isNewArrival: false, image: '' });
  };

  const TabButton = ({ id, label, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 rounded-lg ${
        active ? 'bg-accent text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      } transition-colors`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-secondary py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-primary">Admin Dashboard</h1>
        
        <div className="flex space-x-4 mb-8">
          <TabButton id="overview" label="Overview" active={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton id="artworks" label="Manage Artworks" active={activeTab === 'artworks'} onClick={setActiveTab} />
          <TabButton id="messages" label="Messages" active={activeTab === 'messages'} onClick={setActiveTab} />
          <TabButton id="pages" label="Page Content" active={activeTab === 'pages'} onClick={setActiveTab} />
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Total Artworks</h3>
              <p className="text-3xl font-bold text-accent">{artworks.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">New Arrivals</h3>
              <p className="text-3xl font-bold text-green-600">
                {artworks.filter(art => art.isNewArrival).length}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Messages</h3>
              <p className="text-3xl font-bold text-orange-600">{messages.length}</p>
            </div>
          </div>
        )}

        {activeTab === 'artworks' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Add New Artwork</h2>
            <form onSubmit={handleArtworkSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={newArtwork.title}
                  onChange={(e) => setNewArtwork({...newArtwork, title: e.target.value})}
                  className="px-3 py-2 border rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Price (e.g., $299)"
                  value={newArtwork.price}
                  onChange={(e) => setNewArtwork({...newArtwork, price: e.target.value})}
                  className="px-3 py-2 border rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={newArtwork.category}
                  onChange={(e) => setNewArtwork({...newArtwork, category: e.target.value})}
                  className="px-3 py-2 border rounded-md"
                  required
                />
                <input
                  type="url"
                  placeholder="Image URL"
                  value={newArtwork.image}
                  onChange={(e) => setNewArtwork({...newArtwork, image: e.target.value})}
                  className="px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={newArtwork.isNewArrival}
                  onChange={(e) => setNewArtwork({...newArtwork, isNewArrival: e.target.checked})}
                />
                <span>Mark as New Arrival</span>
              </label>
              <button
                type="submit"
                className="bg-accent text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Add Artwork
              </button>
            </form>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Customer Messages</h2>
            {messages.length === 0 ? (
              <p className="text-gray-500">No messages yet.</p>
            ) : (
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className="border-b pb-4">
                    <h4 className="font-semibold">{message.name}</h4>
                    <p className="text-gray-600">{message.email}</p>
                    <p className="mt-2">{message.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'pages' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Edit Page Content</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">About Us Content</label>
                <textarea
                  rows="6"
                  className="w-full px-3 py-2 border rounded-md"
                  defaultValue="We are passionate curators of contemporary art..."
                />
              </div>
              <button className="bg-accent text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Update Content
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;