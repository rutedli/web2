"use client"

// components/Profile.js
import React from 'react';
import styles from './Profile.module.css'; // Estilos CSS módulo para aplicar estilos personalizados

function Profile() {
    return (
        <div className={styles.profile}>
            <figure className={styles.profileImg}>
                <img src="/assets/images/perfil_picture.jpeg" alt="Profile" />
            </figure>
            <div className={styles.profileInfo}>
                <h1>Victor Alvarado</h1>
                <p>Software Engineer</p>
                <div className={styles.profileSocial}>
                    <a href="https://github.com" target="_blank">
                        <img src="/assets/icons/github.svg" alt="github" className={styles.profileSocialImg} />
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <img src="/assets/icons/twitter.svg" alt="twitter" className={styles.profileSocialImg} />
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                        <img src="/assets/icons/linkedin.svg" alt="linkedin" className={styles.profileSocialImg} />
                    </a>
                    <a href="https://youtube.com" target="_blank">
                        <img src="/assets/icons/youtube.svg" alt="youtube" className={styles.profileSocialImg} />
                    </a>
                </div>
            </div>
        </div>
        
    );
}

export default Profile;
