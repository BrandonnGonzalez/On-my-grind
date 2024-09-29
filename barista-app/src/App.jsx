import React from 'react';
import BaristaForm from './Components/BaristaForm';
import './App.css';
import coffeeLogo from './assets/iced-coffee-clipart.webp';
  // Replace with the correct path if needed

const App = () => {
  return (
    <div className="title-container">
      <img src={coffeeLogo} alt="Coffee Icon" className="logo" />
      <h1 className="title">On My Grind</h1>
      <p className="subtitle">So you think you can barista? Let's put that to the test...</p>
      <BaristaForm />
    </div>
  );
}

export default App;
