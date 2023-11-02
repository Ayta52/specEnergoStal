/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import main1 from '../../../../img/main1.png';
import main3 from '../../../../img/main3.png';
import styles from './sliderTest.module.css';

export function SliderTest() {
  const slides = [main1, main3, main1, main3];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div
          className={classNames(styles.slide, {
            [styles.active]: index === activeIndex,
          })}
          key={index}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
    </div>
  );
}