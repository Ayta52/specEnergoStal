import React from 'react';
import { useResize } from '../common/UseResize';
import Logo from "../../../img/logo.png";
import styles from './preFooter.module.css';

export function PreFooter() {
  const {
    isScreenFOOT,
    isScreenMd
  } = useResize();
  return (
    <div className={styles.preFooterContainer}>
      {isScreenMd ? (
        <img src={Logo} alt="Logo" className={styles.logo} />
      ) : (
        <div className={styles.leftPreFooter}>
          <div>
            <span> Юр.адрес:</span> 606107, Нижегородская обл., г.Павлово,
            ул.Пионерская, д.1г
          </div>

          <div>
            <span> Факт.адрес:</span> 603105, г.Нижний Новгород, ул.Ванеева,
            д.34 офис 413-416
          </div>
        </div>
      )}

      <div className={styles.rightPreFooter}>
        <div className={styles.rightPreFooterLinks}>
          <a href="tel:+78312100108">+7 831 210 01 08 </a>
          <a href="mailto:info@senergostal.ru">info@senergostal.ru</a>
        </div>

        {isScreenFOOT ? (
          <div className={styles.rightPreFooterImgColumnReverse}>
            <button className={styles.downloadBtnTextColumnReverse}>
              скачать буклет
            </button>
          </div>
        ) : (
          <div className={styles.rightPreFooterImg}>
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
          </div>
        )}

        {/* <div className={styles.rightPreFooterImg}>
          {isScreenFOOT ? (
            <button className={styles.downloadBtnisScreenFOOT}>
              <span className={styles.downloadBtnText}>скачать буклет</span>
            </button>
          ) : (
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
          )}
        </div> */}
      </div>
    </div>
  );
}
