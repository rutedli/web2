"use client"

// components/Buttons.js
import React from 'react';
import styles from './Buttons.module.css';

function Buttons() {
    const download = () => {
        alert("Downloading Document");
    };

    return (
        <div className={styles.buttons}>
            {/* Tu contenido aquí */}
        </div>
    );
}

export default Buttons;
