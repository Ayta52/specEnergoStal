// import React from 'react';
import { Link } from "react-router-dom";
import styles from "./iconlogo.module.css";
import Logo from "../../../../icons/iconLogo.svg";

export function IconLogo() {
  return (
    <Link to={"/"}>
      <img src={Logo} alt="Logo" className={styles.logo} />
    </Link>
  );
}
