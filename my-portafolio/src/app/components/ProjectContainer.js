"use client"
// Importa los estilos CSS que necesites
// Importa los estilos CSS que necesites
import styles from './ProjectContainer.module.css';

function ProjectContainer() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.contentCardImg}>
        <img className={styles.image} src="assets/images/Hero_2.png" />
        <div className={styles.contentCardImgOverlay}></div>
        <div className={styles.contentCardImgDetail}>
          <p className={styles.title}>SmarterTrading411</p>
          <p className={styles.detail}>Landing page of SmarterTrading411 created using WordPress</p>
          <button className={styles.btn}>
            <img src="assets/icons/link.svg" alt="link" />
          </button>
        </div>
      </div>
      {/* Repite este patrón para los demás elementos */}
      <div className={styles.contentCardImg}>
        <img className={styles.image} src="assets/images/bussiness_man.png" />
        <div className={styles.contentCardImgOverlay}></div>
      </div>
      <div className={styles.contentCardImg}>
        <img className={`${styles.image} ${styles.grayscale}`} src="assets/images/pictures_wall.jpeg" />
        <div className={styles.contentCardImgOverlay}></div>
      </div>
      <div className={styles.contentCardImg}>
        <img className={styles.image} src="assets/images/kitchen.jpeg" />
        <div className={styles.contentCardImgOverlay}></div>
      </div>
      <div className={styles.contentCardImg}>
        <img className={styles.image} src="assets/images/mobile_app.png" />
        <div className={styles.contentCardImgOverlay}></div>
      </div>
      <div className={styles.contentCardImg}>
        <img className={`${styles.image} ${styles.grayscale}`} src="assets/images/issima_page.png" />
        <div className={styles.contentCardImgOverlay}></div>
      </div>
    </div>
  );
}

export default ProjectContainer;
