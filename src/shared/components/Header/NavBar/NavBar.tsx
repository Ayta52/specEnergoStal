// import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './navbar.module.css';
import { DropDown } from '../DropDown';

export function NavBar() {

  const [isOpenNavBar, setIsOpen] = useState(true);
    const dropdownRef = useRef(null);
  
    const handleLinkClick = (index: number) => {
      setIsOpen(false);
    };

    const handleMouseEnter = () => {
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
    };
  
    // const handleOutsideClick = (event) => {
    //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //     setIsOpen(false);
    //   }
    // };
  
    // useEffect(() => {
    //   document.addEventListener('click', handleOutsideClick);
    //   return () => {
    //     document.removeEventListener('click', handleOutsideClick);
    //   };
    // }, []);

  return (
    <>
      <div
        className={styles.navbar}
        // ref={dropdownRef}
      >
        <ul className={styles.navList}>
          <li className={styles.listItem}>
            <Link to="/" className={styles.navLink}>
              Главная
            </Link>
            <div className={styles.underLine} />
          </li>

          <li
            className={styles.listItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <DropDown isOpenNavBar={isOpenNavBar} handleLinkClick={handleLinkClick} />
            
            <div className={styles.underLine} />
          </li>

          <li className={styles.listItem}>
            <Link to="/certificatelist" className={styles.navLink}>
              Сертификаты
            </Link>
            <div className={styles.underLine} />
          </li>
          <li className={styles.listItem}>
            <Link to="/contact" className={styles.navLink}>
              Контакты
            </Link>
            <div className={styles.underLine} />
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
