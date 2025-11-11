# Abstract Art Archive - Interactive Collection

An interactive React application for organizing and curating a collection of abstract artworks through drag-and-drop interactions.

## Project Overview

This project fulfills the Canvas Assignment 3 requirements for creating an interactive archive with rearrangeable elements. Users can organize a collection of 15 abstract artworks by dragging them into categories, reordering them, or removing items from the collection.

## Features

### Core Requirements Met
- **15+ Items**: Collection includes 15 unique abstract artworks
- **Interactive Rearrangement**: Full drag-and-drop functionality
- **React State Management**: Uses `useState` hooks for all state
- **Visual Feedback**: Clear indicators for dragging and drop zones
- **Automatic UI Updates**: Interface updates instantly on changes

### User Interactions
1. **Drag to Reorder**: Click and drag artworks to change their position in the grid
2. **Categorize**: Drag artworks onto category chips to organize them
3. **Filter**: Click category chips to view specific collections
4. **Delete**: Hover over artworks and click the X button to remove
5. **Reset**: Use the "Reset Collection" button to restore defaults

### Categories
- **All Artworks** - View entire collection
- **Favorites** - Mark your favorite pieces
- **Geometric** - Geometric abstract patterns
- **Organic** - Flowing, natural forms
- **Minimalist** - Simple, clean designs
- **Uncategorized** - Default category

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies
```bash
npm install
```

2. Start development server
```bash
npm run dev
```

3. Open browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production files will be in the `dist/` directory.

## Project Structure

```
international-archive/
├── source/
│   ├── main.jsx          # Main React application
│   ├── style.css         # Styling and animations
│   └── images/           # 15 artwork images
├── index.html            # Entry HTML file
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## How to Use

### Organizing Artworks

1. **Hover** over any artwork to see the drag handle
2. **Click and drag** the artwork to a new position
3. **Drop** it between other artworks to reorder
4. **Drop on a category chip** to categorize the artwork

### Filtering

- Click any category chip at the top to filter artworks
- The count shows how many artworks are in each category
- "All Artworks" shows the complete collection

### Managing Collection

- **Delete**: Hover over an artwork and click the X button
- **Reset**: Click "Reset Collection" to restore all artworks

## Technologies Used

- **React 19.2.0** - UI framework with hooks
- **Vite 7.1.12** - Build tool and dev server
- **HTML5 Drag and Drop API** - Native drag-and-drop
- **CSS3** - Animations and responsive design

## Design Considerations

### Theme
The archive features abstract art pieces including geometric patterns, organic forms, minimalist designs, and artistic photography. The collection represents diverse styles within abstract art.

### Visual Design
- Gradient purple background for aesthetic appeal
- Card-based layout with hover effects
- Smooth animations and transitions
- Responsive grid that adapts to screen size
- Clear visual feedback during interactions

### User Experience
- Intuitive drag-and-drop interface
- Category system for organization
- Visual indicators (drag handles, hover effects)
- Helpful tip displayed at the bottom
- Statistics showing collection size

## Assignment Requirements

This project meets all Canvas Assignment 3 requirements:

1. **15+ Items**: 15 unique artworks included
2. **Interactive Rearrangement**: Drag-and-drop with category organization
3. **React State**: `useState` manages all application state
4. **Visual Clarity**: Clear indicators for dragging and drop zones
5. **Automatic Updates**: UI updates immediately on state changes

## Creative Approach

**What are we collecting?**
Abstract artworks representing different styles - geometric patterns, organic forms, minimalist designs, and artistic photography.

**What does rearrangement mean?**
Users can curate their own exhibition by organizing artworks into categories (Favorites, Geometric, Organic, Minimalist) and arranging them in their preferred order.

**Organization Structure**
The category system provides structure while allowing flexibility. Users can create their own curated collections within each category.
