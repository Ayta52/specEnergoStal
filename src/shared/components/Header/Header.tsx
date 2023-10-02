import React from 'react';
import { IconLogo } from './IconLogo';
import { InfoBlock } from './InfoBlock';
import { NavBar } from './NavBar';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <IconLogo />
      <NavBar />
      <InfoBlock />
    </header>
  );
}
