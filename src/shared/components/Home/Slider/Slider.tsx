/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import slide1 from '../../../../img/main1.png';
import slide3 from '../../../../img/main3.png';
import styles from './slider.module.css';

// const img = [
//   <img key={slide1} src={slide1} />,
//   <img key={slide3} src={slide3} />,
//   <img key={slide1} src={slide1} />,
//   <img key={slide3} src={slide3} />,
// ];
const img = [
  <div className={styles.slider1} key={slide1}></div>,
  <div className={styles.slider3} key={slide3}></div>,
  <div className={styles.slider1} key={slide1}></div>,
  <div className={styles.slider3} key={slide3}></div>,
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
      <div className={styles.slider3}></div>



      {/* <div
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
      </div> */}
    </div>
  );
}
