import React from 'react';
import prevArrow from '../../../icons/leftArrow.svg';
import nextArrow from '../../../icons/rightArrow.svg';
import styles from './certificate.css';

export function Certificate() {
  return (
    <div className={styles.certificate}>

      <div className={styles.certificateTitle}>
        <h2>СЕРТИФИКАТЫ</h2>
        <div className={styles.certificateTitleDescription}>
          Основным направлением компании является <span className={styles.descriptionBlue}>производство и комплектация трубопроводных систем</span> для газовой, нефтяной, атомной и нефтехимической промышленности
        </div>
      </div>

      <div className={styles.certificateSlider}>
          <div className={styles.certificateSliderPrevArrow}>
            <img src={prevArrow} alt="prev" />
          </div>
          {/* сделать сам слайдер  */}
          <div className={styles.certificateSliderNextArrow}>
            <img src={nextArrow} alt="next" />
          </div>
      </div>
    </div>
  );
}
