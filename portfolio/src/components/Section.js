import React from 'react';
import '../styles/Section.css';

import AboutMe from "../components/AboutMe"

const styles = {
  sectionStyles: {
    background: 'orange',
  },
};

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <AboutMe />
    </section>
  );
}

export default Section;
