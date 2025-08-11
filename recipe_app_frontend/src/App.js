import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/common.css';
import './assets/Home.css';
import Home from './components/Home';

// PUBLIC_INTERFACE
function App() {
  // Only handles display of Home page for now.
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
