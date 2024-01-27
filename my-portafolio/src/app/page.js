"use client"

// pages/index.js
import React from 'react';
import ProjectContainer from './components/ProjectContainer';


import styles from '../styles/page.module.css';

function Home() {
  return (
    <div className={styles.main}>
      <ProjectContainer />
    </div>
  );
}

export default Home;
