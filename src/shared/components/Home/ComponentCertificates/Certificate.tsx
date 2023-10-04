// import React, { useEffect, useState } from 'react';

import allCertificate from '../../../../icons/allCertificate.svg';
import certificate1 from '../../../../img/certificates/1.jpg';
import certificate2 from '../../../../img/certificates/2.jpg';
import DC from '../../../../img/certificates/DC.jpg'
import ISO from '../../../../img/certificates/ISO.jpg'
import TCTP1 from '../../../../img/certificates/TCTP1.jpg'
import TCTP2 from '../../../../img/certificates/TCTP2.jpg'
import styles from './certificate.module.css';
import generateRandomIndex from '../../../../utils/js/generateRandomIndex';

const imgList = [
  {
    id: 1,
    content: <img key={generateRandomIndex()} src={certificate2} alt="sert" />,
  },
  {
    id: 2,
    content: <img key={generateRandomIndex()} src={certificate1} alt="sert" />,
  },
  {
    id: 3,
    content: <img key={generateRandomIndex()} src={DC} alt="sert" />,
  },
  {
    id: 4,
    content: <img key={generateRandomIndex()} src={ISO} alt="sert" />,
  },
  {
    id: 5,
    content: <img key={generateRandomIndex()} src={TCTP1} alt="sert" />,
  },
  {
    id: 6,
    content: <img key={generateRandomIndex()} src={TCTP2} alt="sert" />,
  },
  {
    id: 7,
    content: <img key={generateRandomIndex()} src={certificate2} alt="sert" />,
  },
  {
    id: 8,
    content: <img key={generateRandomIndex()} src={certificate1} alt="sert" />,
  },
  {
    id: 9,
    content: <img key={generateRandomIndex()} src={DC} alt="sert" />,
  },
  {
    id: 10,
    content: <img key={generateRandomIndex()} src={ISO} alt="sert" />,
  },
  {
    id: 11,
    content: <img key={generateRandomIndex()} src={TCTP1} alt="sert" />,
  },
  {
    id: 12,
    content: <img key={generateRandomIndex()} src={TCTP2} alt="sert" />,
  },
];

export function Certificate() {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [clickLeft, setClickLeft] = useState(false);
  // const [clickRight, setClickRight] = useState(false);

  // useEffect(() => {
  //   setActiveIndex((current) => {
  //     const res = current === imgList.length - 1 ? 0 : current + 1;
  //     return res;
  //   });
  // }, []);

  // const handleNextSlide = () => {
  //   setActiveIndex(activeIndex === imgList.length - 1 ? 0 : activeIndex + 1);
  //   setClickRight(!clickRight);
  // };

  // const handlePrevSlide = () => {
  //   setActiveIndex(activeIndex === 0 ? imgList.length - 1 : activeIndex - 1);
  //   setClickLeft(!clickLeft);
  // };

  return (
    <div className={styles.certificate}>
      <div className={styles.certificateTitle}>
        <h2>СЕРТИФИКАТЫ</h2>
        <div className={styles.certificateTitleDescription}>
          Основным направлением компании является{' '}
          <span className={styles.descriptionBlue}>
            производство и комплектация трубопроводных систем
          </span>{' '}
          для газовой, нефтяной, атомной и нефтехимической промышленности
        </div>
      </div>

      <div className={styles.certificateSlider}>
        {/* <div
          className={styles.certificateSliderPrevArrow}
          // onClick={handlePrevSlide}
        >
          <img src={prevArrow} alt="prev" />
        </div> */}

        <div
        // className={
        //   clickLeft || clickRight
        //     ? styles.certificateSliderContainerClickLeft
        //     : styles.certificateSliderContainer
        // }
        >
          <span className={styles.tikerCertificate}>
            {imgList.map((item, index) => (
              <div key={item.id} className={styles.certificateSliderElement}>
                {item.content}
              </div>
            ))}
          </span>
          {/* <span className={styles.tikerCertificate}>
            {imgList.map((item, index) => (
              <div key={item.id} className={styles.certificateSliderElement}>
                {item.content}
              </div>
            ))}
          </span> */}
        </div>

        {/* <div
          className={styles.certificateSliderNextArrow}
          // onClick={handleNextSlide}
        >
          <img src={nextArrow} alt="next" />
        </div> */}
      </div>

      <div className={styles.certificateButton}>
        <span>смотреть все</span>

        <img src={allCertificate} alt="allCertificate" />
      </div>
    </div>
  );
}
