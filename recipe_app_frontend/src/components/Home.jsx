import React, { useState } from 'react';
import '../assets/Home.css';

// Placeholder icons (these would be replaced with SVGs or image imports)
const ICONS = {
  search: '/assets/icons/icon-search.svg',
  settings: '/assets/icons/icon-settings.svg',
  bookmark: '/assets/icons/icon-bookmark.svg',
  star: '/assets/icons/icon-star.svg',
  timer: '/assets/icons/icon-timer.svg',
  homeActive: '/assets/icons/icon-home-active.svg',
  home: '/assets/icons/icon-home.svg',
  profile: '/assets/icons/icon-profile.svg',
  notification: '/assets/icons/icon-notification.svg',
  plus: '/assets/icons/icon-plus.svg',
};

const CATEGORIES = [
  'All', 'Indian', 'Italian', 'Asian', 'Chinese',
  'Fruit', 'Vegetables', 'Protein', 'Cereal', 'Local Dishes'
];

const DISHES = [
  {
    name: 'Classic Greek Salad',
    image: 'https://via.placeholder.com/150x176',
    time: '15 Mins',
    rating: 4.5
  },
  {
    name: 'Crunchy Nut Coleslaw',
    image: 'https://via.placeholder.com/150x176',
    time: '10 Mins',
    rating: 3.5
  },
  {
    name: 'Shrimp Chicken Andouille Sausage Jambalaya',
    image: 'https://via.placeholder.com/150x176',
    time: '10 Mins',
    rating: 3.0
  },
  {
    name: 'Barbecue Chicken Jollof Rice',
    image: 'https://via.placeholder.com/150x176',
    time: '10 Mins',
    rating: 4.5
  },
  {
    name: 'Portuguese Piri Piri Chicken',
    image: 'https://via.placeholder.com/150x176',
    time: '10 Mins',
    rating: 4.5
  }
];

const NEW_RECIPES = [
  {
    name: 'Steak with tomato sauce and bulgur rice.',
    image: 'https://via.placeholder.com/80x86',
    rating: 5.0,
    time: '20 mins',
    creator: {
      name: 'James Milner',
      avatar: 'https://via.placeholder.com/25'
    }
  },
  {
    name: 'Pilaf sweet with lamb-and-raisins',
    image: 'https://via.placeholder.com/80x86',
    rating: 4.5,
    time: '20 mins',
    creator: {
      name: 'Laura Wilson',
      avatar: 'https://via.placeholder.com/25'
    }
  },
  {
    name: 'Rice Pilaf, Broccoli and Chicken',
    image: 'https://via.placeholder.com/80x86',
    rating: 4.5,
    time: '20 mins',
    creator: {
      name: 'Lucas Moura',
      avatar: 'https://via.placeholder.com/25'
    }
  },
  {
    name: 'Chicken meal with sauce',
    image: 'https://via.placeholder.com/80x86',
    rating: 4.0,
    time: '20 mins',
    creator: {
      name: 'Issabella Ethan',
      avatar: 'https://via.placeholder.com/25'
    }
  }
];

/**
 * PUBLIC_INTERFACE
 * Home - Renders the Home screen layout: header, search/filter, categories, dishes, new recipes, and bottom nav.
 */
function Home() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="recipe-home-root">
      {/* Status Bar */}
      <div className="status-bar"></div>

      {/* Header */}
      <div className="home-header">
        <div className="home-title-block">
          <div className="home-title">Hello Jega</div>
          <div className="home-subtitle">What are you cooking today?</div>
        </div>
        <div className="home-avatar">
          <div className="avatar-circle">
            <img src="https://via.placeholder.com/40" alt="Profile" />
          </div>
        </div>
      </div>

      {/* Search bar and filter */}
      <div className="home-search-row">
        <div className="search-field">
          <span className="icon search-icon" style={{ backgroundImage: `url(${ICONS.search})` }}></span>
          <span className="search-placeholder">Search recipe</span>
        </div>
        <button className="filter-btn" aria-label="Open Filter">
          <span className="icon filter-icon" style={{ backgroundImage: `url(${ICONS.settings})` }}></span>
        </button>
      </div>

      {/* Categories - horizontal scroll */}
      <div className="home-categories">
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat}
            className={`category-btn${i === activeCategory ? ' active' : ''}`}
            onClick={() => setActiveCategory(i)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dishes horizontal card list */}
      <div className="home-dishes">
        <div className="dishes-row">
          {DISHES.map((dish, i) => (
            <div className="dish-card" key={i}>
              <div className="dish-card-img">
                <img src={dish.image} alt={dish.name} />
                <button className="bookmark-btn" aria-label="Bookmark">
                  <span className="icon bookmark-icon" style={{ backgroundImage: `url(${ICONS.bookmark})` }}></span>
                </button>
              </div>
              <div className="dish-card-info">
                <div className="dish-card-time">
                  <span className="dish-label">Time</span>
                  <span className="dish-time">{dish.time}</span>
                </div>
                <div className="dish-card-title">{dish.name}</div>
                <div className="dish-card-rating">
                  <span className="icon star-icon" style={{ backgroundImage: `url(${ICONS.star})` }}></span>
                  <span className="rating-value">{dish.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Recipes Section Title */}
      <div className="section-title">New Recipes</div>

      {/* New Recipes horizontal list */}
      <div className="home-new-recipes">
        <div className="new-recipes-row">
          {NEW_RECIPES.map((rec, i) => (
            <div className="new-recipe-card" key={i}>
              <div className="new-recipe-img">
                <img src={rec.image} alt={rec.name} />
              </div>
              <div className="new-recipe-info">
                <div className="new-recipe-title">{rec.name}</div>
                <div className="new-recipe-details">
                  <span className="icon star-icon" style={{ backgroundImage: `url(${ICONS.star})` }}></span>
                  <span className="rating-value">{rec.rating}</span>
                  <span className="icon timer-icon" style={{ backgroundImage: `url(${ICONS.timer})` }}></span>
                  <span className="new-recipe-time">{rec.time}</span>
                  <span className="new-recipe-creator">
                    <span className="avatar-small">
                      <img src={rec.creator.avatar} alt={rec.creator.name} />
                    </span>
                    <span className="creator-label">By {rec.creator.name}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Navigation Bar & Home Indicator */}
      <div className="home-nav-container">
        <div className="nav-bar">
          <button className="nav-btn home active" aria-label="Home">
            <span className="icon nav-home" style={{ backgroundImage: `url(${ICONS.homeActive})` }}></span>
          </button>
          <button className="nav-btn" aria-label="Bookmark">
            <span className="icon nav-bookmark" style={{ backgroundImage: `url(${ICONS.bookmark})` }}></span>
          </button>
          <button className="nav-btn nav-plus" aria-label="Add">
            <span className="icon nav-plus" style={{ backgroundImage: `url(${ICONS.plus})` }}></span>
          </button>
          <button className="nav-btn" aria-label="Notifications">
            <span className="icon nav-notification" style={{ backgroundImage: `url(${ICONS.notification})` }}></span>
          </button>
          <button className="nav-btn" aria-label="Profile">
            <span className="icon nav-profile" style={{ backgroundImage: `url(${ICONS.profile})` }}></span>
          </button>
        </div>
        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

export default Home;
