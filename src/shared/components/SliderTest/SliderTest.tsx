import React, { useState, useEffect } from 'react';
import './sliderTest.module.css';
import main1 from '../../../img/main1.png';
import main2 from '../../../img/main2.png';
import main3 from '../../../img/main3.png';
import main4 from '../../../img/main4.png';
import main5 from '../../../img/main5.png';
import styles from './sliderTest.module.css';

export const SliderTest = () => {
    const images = [main1, main2, main3, main4, main5];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 3000); // Change slide every 3 seconds
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    return (
      <div className={styles.slider}>
        <div className={styles.slides}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };
