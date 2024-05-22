/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import Logo from '../../../img/logo.png';
import styles from './footer.module.css';

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <Link to={"/"}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Link>

      <div className={styles.footerLinks}>
        <div className={styles.footerRightLinksRouting}>
          <Link to="/">Главная</Link>
          <Link to="/productlist">Продукция</Link>
          <Link to="/certificatelist">Сертификаты</Link>
          <Link to="/contact">Контакты</Link>
        </div>

        <div className={styles.footerRightLinksProducts}>
          <div className={styles.footerRightLinksProductsColumn}>
            <Link to="/otvod" className={styles.footerRightLinksProductsLinks}>Отводы</Link>
            <Link to="/perehod" className={styles.footerRightLinksProductsLinks}>Переходы</Link>
            <Link to="/troynik" className={styles.footerRightLinksProductsLinks}>Тройники</Link>
            <Link to="/flanec" className={styles.footerRightLinksProductsLinks}>Фланцы</Link>
            <Link to="/zaglushka" className={styles.footerRightLinksProductsLinks}>Заглушки</Link>
          </div>
          
          <div className={styles.footerRightLinksProductsColumn}>
            <Link to="/dno" className={styles.footerRightLinksProductsLinks}>Днища</Link>
            <Link to="/opora" className={styles.footerRightLinksProductsLinks}>Опоры</Link>
            <Link to="/shtucer" className={styles.footerRightLinksProductsLinks}>Штуцеры</Link>
            <Link className={styles.footerRightLinksProductsLast} to="/productinfo">Запорная арматура</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
