// import React from 'react';
import styles from './preheader.module.css';

export function PreHeader() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 className={styles.title}>
            Производство и комплектация{'\n'}{' '}
            <span className={styles.titleBlue}>трубопроводных систем</span>
            {'\n'} для промышленности
          </h1>
        </div>
        
        <div className={styles.rightBlok}>
          <button className={styles.downloadBtn}>
            <svg
              className={styles.downloadBtnIcon}
              width="192"
              height="58"
              viewBox="0 0 192 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M96 56L4 29L96 2L188 29L96 56Z"
                stroke="#008FFF"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
            </svg>
            <p className={styles.downloadBtnText}>скачать буклет</p>
          </button>
          <p className={styles.rightDescr}>
            Обеспечиваем потребности{'\n'} предприятий и заводов России{'\n'} и
            стран СНГ с 2006 года
          </p>
        </div>
      </div>
    </>
  );
}
