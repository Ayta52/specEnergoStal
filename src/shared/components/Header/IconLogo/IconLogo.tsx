import React from 'react';
import styles from './iconlogo.module.css';
import Logo from '../../../../icons/iconLogo.svg';

export function IconLogo() {
  return <img src={Logo} alt="Logo" className={styles.logo} />;
}
