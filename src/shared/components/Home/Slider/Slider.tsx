/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import slide1 from '../../../../img/main1.png';
import slide2 from '../../../../img/main2.jpg';
import styles from './slider.module.css';

const img = [
  <img key={slide1} src={slide1} />,
  <img key={slide2} src={slide2} />,
  <img key={slide1} src={slide1} />,
  <img key={slide2} src={slide2} />,
];

export function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % img.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevImgIndex = (activeIndex + img.length - 1) % img.length;
  const nextImgIndex = (activeIndex + 1) % img.length;

  return (
    <div className={styles.slider}>
      <div
        className={classNames(
          styles.sliderElement,
          styles.sliderImg,
          styles.sliderImgPrev
        )}
        key={prevImgIndex}
      >
        {img[prevImgIndex]}
      </div>
      <div
        className={classNames(styles.sliderElement, styles.sliderImg)}
        key={activeIndex}
      >
        {img[activeIndex]}
      </div>
      <div
        className={classNames(
          styles.sliderElement,
          styles.sliderImg,
          styles.sliderImgNext
        )}
        key={nextImgIndex}
      >
        {img[nextImgIndex]}
      </div>
    </div>
  );
}
