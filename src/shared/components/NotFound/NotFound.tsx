/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../img/notFound.svg';
import styles from './notFound.module.css';
export function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.notFound_text}>
        <h1 className={styles.notFound_title}>
          труба потекла.. <br />
          скоро всё починим!
        </h1>
        <p className={styles.notFound_subtitle}>
          вы можете вернуться на &nbsp;
          <span className={styles.notFound_link_span}>
            <Link className={styles.notFound_link} to={'/'}>главную</Link>
          </span>
            
        </p>
      </div>

      <div className={styles.notFound_img}>
        <img src={notFound} alt="404" />
      </div>
    </div>
  );
}
