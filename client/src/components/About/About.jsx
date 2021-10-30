import React from 'react';

import HeaderAbout from '../HeaderAbout/HeaderAbout'
import Footer from '../Footer/Footer';

import styles from '../About/About.module.css'


function About(props) {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <HeaderAbout />
        </div>
      <Footer />
      </div>
    </div>    
  );
}

export default About;
