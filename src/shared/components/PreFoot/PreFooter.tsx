import React from 'react';
import { useResize } from '../common/UseResize';
import Logo from "../../../img/logo.png";
import pdf  from "../.../../../../types/types.s";
import styles from './preFooter.module.css';

export function PreFooter() {
  const {
    isScreenFOOT,
    isScreenMdPreFoot
  } = useResize();
  // const bukletPDF = 
  const isIPhone = /iPhone/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  const handleDownloadBrochure = () => {
    const filePath = pdf("buklet.pdf");
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'buklet.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.preFooterContainer}>
      {isScreenMdPreFoot ? (
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

      {isScreenFOOT ? (
        <div
          className={`${styles.rightPreFooterImgColumnReverse} ${
            isIPhone ? styles.rightPreFooterImgColumnReverseIphone : ""
          } ${isAndroid ? styles.rightPreFooterImgColumnReverseAndroid : ""}`}
        >
          <button
            className={`${styles.downloadBtnTextColumnReverse} ${
              isIPhone ? styles.downloadBtnTextColumnReverseIphone : ""
            } ${isAndroid ? styles.downloadBtnTextColumnReverseAndroid : ""}`}
            onClick={handleDownloadBrochure}
          >
            скачать буклет
          </button>
          <div className={styles.rightPreFooter}>
            <div className={styles.rightPreFooterLinks}>
              <a
                className={styles.rightPreFooterLinksText}
                href="tel:+78312100108"
              >
                +7 831 210 01 08{" "}
              </a>
              <a
                className={styles.rightPreFooterLinksText}
                href="mailto:info@senergostal.ru"
              >
                info@senergostal.ru
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.rightPreFooter}>
          <div className={styles.rightPreFooterLinks}>
            <a
              className={styles.rightPreFooterLinksText}
              href="tel:+78312100108"
            >
              +7 831 210 01 08{" "}
            </a>
            <a
              className={styles.rightPreFooterLinksText}
              href="mailto:info@senergostal.ru"
            >
              info@senergostal.ru
            </a>
          </div>
          <div className={styles.rightPreFooterImg}>
            <button className={styles.downloadBtn}
             onClick={handleDownloadBrochure}
             >
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
            {/* <a href={bukletPDF} download>скачатьать</a> */}
          </div>
        </div>
      )}

    </div>
  );
}
