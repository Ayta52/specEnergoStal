import React from 'react';
import styles from './header.css';
import { IconLogo } from './IconLogo';
import { NavBar } from './NavBar';
import { InfoBlock } from './InfoBlock';

export function Header() {
  return (
    <header className={styles.header}>
      <IconLogo />
      <NavBar />
      <InfoBlock />
    </header>
  );
}
