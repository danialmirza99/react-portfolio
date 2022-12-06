import React from 'react';
import '../styles/Footer.css';



const styles = {
  footerStyle: {
    background: 'green',
  },
  footingStyle: {
    fontSize: '100px',
  },
};


function Footer() {
  return (
    <header style={styles.footerStyle} className="footer">
      <h1 style={styles.footingStyle}>Footer</h1>
    </header>
  );
}

export default Footer;