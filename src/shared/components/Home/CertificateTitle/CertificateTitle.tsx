import React from 'react';
import styles from './certificateTitle.module.css';

const CertificateTitle = () => {
  return (
    <div className={styles.certificateContainer}>
      <div className={styles.certificateTitle}>
        <h2 className={styles.certificateTitleText}>СЕРТИФИКАТЫ</h2>
        <div className={styles.certificateTitleDescription}>
          Основным направлением компании является{' '}
          <span className={styles.descriptionBlue}>
            производство и комплектация трубопроводных систем
          </span>{' '}
          для газовой, нефтяной, атомной и нефтехимической промышленности
        </div>
      </div>
    </div>
  )
}

export default CertificateTitle
