/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react';
import notFound from '../../../img/notFound.svg';
import styles from './notFound.module.css';
export function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.notFound_text}>
        <h1>
          труба потекла.. <br />
          скоро всё починим!
        </h1>
        <p>
          вы можете вернуться на{' '}
          <span>
            <a href="#">главную</a>
          </span>
        </p>
      </div>

      <div className={styles.notFound_img}>
        <img src={notFound} alt="404" />
      </div>
    </div>
  );
}
