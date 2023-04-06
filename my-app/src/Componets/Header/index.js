import React from 'react';

const Header = () => {
  return (
    <header>
      <img src="./assets/images/BunkerLogo_White.svg" alt="Brand logo" />
      <span>
        Powered by <img className="logo" src="./assets/images/ChatGPT-Logo.jpg" alt="GPT logo" />
      </span>
    </header>
  );
};

export default Header;
