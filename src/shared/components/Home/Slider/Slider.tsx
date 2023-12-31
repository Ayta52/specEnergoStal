/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import main1 from '../../../../img/main1.png';
import main2 from '../../../../img/main2.png';
import main3 from '../../../../img/main3.png';
import main4 from '../../../../img/main4.png';
import main5 from '../../../../img/main5.png';
import main6 from '../../../../img/main6.png';
import main7 from '../../../../img/main7.png';
import main8 from '../../../../img/main8.png';
import main9 from '../../../../img/main9.png';
import main10 from '../../../../img/main10.png';
import styles from './slider.module.css';

export function Slider() {
  const slides = [main1, main2, main3, main4, main5, main6, main7, main8, main9, main10];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);
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