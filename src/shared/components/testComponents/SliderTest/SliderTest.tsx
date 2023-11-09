import { useState, useEffect } from 'react';
import main1 from '../../../../img/main1.png';
import main2 from '../../../../img/main2.png';
import main3 from '../../../../img/main3.png';
import main4 from '../../../../img/main4.png';
import main5 from '../../../../img/main5.png';
import styles from './sliderTest.module.css';

export const SliderTest = () => {
  const slides = [main1, main2, main3, main4, main5];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div className={styles.slider}>
      {slides.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};
