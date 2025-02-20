import React from 'react';
import logo from '../../assets/logo-2025.png';

import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img src={logo} className="home-logo" alt="logo" />
        <p>Site en cours de construction...</p>
      </div>
    </div>
  );
};
export default Home;
