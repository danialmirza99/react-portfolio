import React from 'react';
import '../styles/Header.css';

const styles = {
  headerStyle: {
    background: 'red',
  },
  headingStyle: {
    fontSize: '60px',
  },
};

function Header() {
  return (
    <header className="header">
      <h1>
        <ul>
          <li>Danial</li>
          <li><a href="#about-me" class="float-right">About Me</a></li>
          <li><a href="#portfolio" class="float-right">Portfolio</a></li>
          <li><a href="#resume" class="float-right">Contact</a></li>
        </ul>
      </h1>
    </header>
  );
}

export default Header;