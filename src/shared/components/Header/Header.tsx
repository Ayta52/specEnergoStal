import React from 'react';
import { IconLogo } from './IconLogo';
import { InfoBlock } from './InfoBlock';
import { NavBar } from './NavBar';
import humb from "../../../icons/humburger.svg";
import styles from './header.module.css';
import { useResize } from '../common/UseResize';

export function Header() {
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
  return (
    <header className={styles.header}>
      {/* <img src={humb} alt="humb"/> */}
      <IconLogo />
      <NavBar />
      <InfoBlock />
    </header>
  );
}
