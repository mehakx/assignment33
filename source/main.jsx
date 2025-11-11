import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// Import all images
import pic1 from "./images/pic1.png";
import img1 from "./images/Screenshot2025-10-22at6.28.40PM.png";
import img2 from "./images/Screenshot2025-10-22at6.28.44PM.png";
import img3 from "./images/Screenshot2025-10-25at6.29.48PM.png";
import img4 from "./images/Screenshot2025-10-31at3.01.20PM.png";
import img5 from "./images/Screenshot2025-11-05at11.08.13AM.png";
import img6 from "./images/Screenshot2025-11-05at5.50.43PM.png";
import abstract1 from "./images/abstract1.jpg";
import abstract2 from "./images/abstract2.jpg";
import abstract3 from "./images/abstract3.jpg";
import abstract4 from "./images/abstract4.jpg";
import abstract5 from "./images/abstract5.jpg";
import abstract6 from "./images/abstract6.jpg";
import abstract7 from "./images/abstract7.jpg";
import abstract8 from "./images/abstract8.jpg";

window.addEventListener("load", () => {
  let root = createRoot(document.getElementById("root"));
  root.render(<App />);
});

function App() {
  // Initial collection of art pieces with metadata
  const initialArtworks = [
    { id: 1, src: pic1, title: "Geometric Waves", category: "uncategorized" },
    { id: 2, src: img1, title: "Radiant Sun", category: "uncategorized" },
    { id: 3, src: img2, title: "Flowing Lines", category: "uncategorized" },
    { id: 4, src: img3, title: "Celestial Alignment", category: "uncategorized" },
    { id: 5, src: img4, title: "Typography Art", category: "uncategorized" },
    { id: 6, src: img5, title: "Modern Lamp", category: "uncategorized" },
    { id: 7, src: img6, title: "Crystal Chandelier", category: "uncategorized" },
    { id: 8, src: abstract1, title: "Linear Geometry", category: "uncategorized" },
    { id: 9, src: abstract2, title: "Minimalist Shapes", category: "uncategorized" },
    { id: 10, src: abstract3, title: "Curved Patterns", category: "uncategorized" },
    { id: 11, src: abstract4, title: "Organic Forms", category: "uncategorized" },
    { id: 12, src: abstract5, title: "Maze Pattern", category: "uncategorized" },
    { id: 13, src: abstract6, title: "Bold Contrast", category: "uncategorized" },
    { id: 14, src: abstract7, title: "Vibrant Colors", category: "uncategorized" },
    { id: 15, src: abstract8, title: "Soft Gradients", category: "uncategorized" },
  ];

  // State management
  const [artworks, setArtworks] = useState(initialArtworks);
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverCategory, setDragOverCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Categories for organization
  const categories = [
    { id: "all", name: "All Artworks", color: "#6366f1" },
    { id: "favorites", name: "Favorites", color: "#ec4899" },
    { id: "geometric", name: "Geometric", color: "#8b5cf6" },
    { id: "organic", name: "Organic", color: "#10b981" },
    { id: "minimalist", name: "Minimalist", color: "#f59e0b" },
    { id: "uncategorized", name: "Uncategorized", color: "#6b7280" },
  ];

  // Filter artworks by category
  const filteredArtworks = selectedCategory === "all" 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  // Drag handlers
  const handleDragStart = (e, artwork) => {
    setDraggedItem(artwork);
    e.currentTarget.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = "1";
    setDraggedItem(null);
    setDragOverCategory(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetArtwork) => {
    e.preventDefault();
    
    if (!draggedItem || draggedItem.id === targetArtwork.id) return;

    // Reorder artworks
    const draggedIndex = artworks.findIndex(art => art.id === draggedItem.id);
    const targetIndex = artworks.findIndex(art => art.id === targetArtwork.id);
    
    const newArtworks = [...artworks];
    newArtworks.splice(draggedIndex, 1);
    newArtworks.splice(targetIndex, 0, draggedItem);
    
    setArtworks(newArtworks);
  };

  const handleCategoryDrop = (e, categoryId) => {
    e.preventDefault();
    setDragOverCategory(null);
    
    if (!draggedItem) return;

    // Update category of dragged item
    const newArtworks = artworks.map(art => 
      art.id === draggedItem.id 
        ? { ...art, category: categoryId }
        : art
    );
    
    setArtworks(newArtworks);
  };

  const handleCategoryDragOver = (e, categoryId) => {
    e.preventDefault();
    setDragOverCategory(categoryId);
  };

  const handleCategoryDragLeave = () => {
    setDragOverCategory(null);
  };

  // Delete artwork
  const handleDelete = (artworkId) => {
    setArtworks(artworks.filter(art => art.id !== artworkId));
  };

  // Reset all to uncategorized
  const handleReset = () => {
    setArtworks(initialArtworks);
    setSelectedCategory("all");
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Abstract Art Archive</h1>
        <p>Drag and drop artworks to organize your collection</p>
      </header>

      <div className="controls">
        <button className="reset-btn" onClick={handleReset}>
          Reset Collection
        </button>
        <div className="stats">
          <span>{artworks.length} artworks</span>
          <span>•</span>
          <span>{filteredArtworks.length} displayed</span>
        </div>
      </div>

      <div className="categories-bar">
        {categories.map(cat => (
          <div
            key={cat.id}
            className={`category-chip ${selectedCategory === cat.id ? 'active' : ''} ${dragOverCategory === cat.id ? 'drag-over' : ''}`}
            style={{ 
              borderColor: cat.color,
              backgroundColor: selectedCategory === cat.id ? cat.color : 'transparent',
              color: selectedCategory === cat.id ? 'white' : cat.color
            }}
            onClick={() => setSelectedCategory(cat.id)}
            onDragOver={(e) => handleCategoryDragOver(e, cat.id)}
            onDragLeave={handleCategoryDragLeave}
            onDrop={(e) => handleCategoryDrop(e, cat.id)}
          >
            {cat.name}
            <span className="count">
              {cat.id === "all" 
                ? artworks.length 
                : artworks.filter(art => art.category === cat.id).length}
            </span>
          </div>
        ))}
      </div>

      <div className="gallery">
        {filteredArtworks.length === 0 ? (
          <div className="empty-state">
            <p>No artworks in this category</p>
            <p className="hint">Drag artworks here to add them</p>
          </div>
        ) : (
          filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="artwork-card"
              draggable
              onDragStart={(e) => handleDragStart(e, artwork)}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, artwork)}
            >
              <div className="artwork-image-container">
                <img 
                  src={artwork.src} 
                  alt={artwork.title}
                  className="artwork-image"
                />
                <div className="artwork-overlay">
                  <button 
                    className="delete-btn"
                    onClick={() => handleDelete(artwork.id)}
                    title="Remove from collection"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="artwork-info">
                <h3>{artwork.title}</h3>
                <span 
                  className="category-badge"
                  style={{ 
                    backgroundColor: categories.find(c => c.id === artwork.category)?.color 
                  }}
                >
                  {categories.find(c => c.id === artwork.category)?.name}
                </span>
              </div>
              <div className="drag-handle">⋮⋮</div>
            </div>
          ))
        )}
      </div>

      <footer className="footer">
        <p>💡 <strong>Tip:</strong> Drag artworks to reorder them or drop them on category chips to organize</p>
      </footer>
    </div>
  );
}
