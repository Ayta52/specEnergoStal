// import React from 'react';
import { Link } from "react-router-dom";
import styles from "./iconlogo.module.css";
import Logo from "../../../../img/logo.png";

export function IconLogo() {
  return (
    <Link className={styles.logoLink} to={"/"}>
      <img src={Logo} alt="Logo" className={styles.logo} />
    </Link>
  );
}
