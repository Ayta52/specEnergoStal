/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../icons/iconLogo.svg';
import styles from './footer.module.css';

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <img src={Logo} alt="Logo" className={styles.logo} />

      <div className={styles.footerLinks}>
        <div className={styles.footerRightLinksRouting}>
          <a href="#">Главная</a>
          <a href="#">Продукция</a>
          <a href="#">Сертификаты</a>
          <a href="#">Контакты</a>
        </div>

        <div className={styles.footerRightLinksProducts}>
          <a href="#">Отводы</a>
          <a href="#">Перехиоды</a>
          <a href="#">Тройники</a>
          <a href="#">Фланцы</a>
          <a href="#">Заглушки</a>
          <a href="#">Днища</a>
          <a href="#">Опоры</a>
          <a href="#">Штуцеры</a>
          <a href="#">Запорная арматура</a>
        </div>
      </div>
    </div>
  );
}
