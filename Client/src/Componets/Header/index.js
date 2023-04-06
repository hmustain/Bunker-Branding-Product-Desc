import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header className='header'>
      <img className='logo' src={process.env.PUBLIC_URL + '/assets/BunkerLogo_White.svg'} alt="Brand logo" />
      <span>
        Powered by <img className="logo" src={process.env.PUBLIC_URL + '/assets/ChatGPT-Logo.jpg'} alt="GPT logo" />
      </span>
    </header>
  );
};

export default Header;
