import React from 'react';
import styles from './sertificatePopup.module.css';

interface SertificatePopupProps {
  certificate: string;
  onClose: () => void;
}

export function SertificatePopup({
  certificate,
  onClose,
}: SertificatePopupProps) {
  return (
    <div className={styles.popup}>
      <div className={styles['popup-overlay']} onClick={onClose}></div>
      <div className={styles['popup-content']}>
        <img
          src={certificate}
          alt="Certificate"
          className={styles['popup-content-img']}
        />
      </div>
    </div>
  );
}
