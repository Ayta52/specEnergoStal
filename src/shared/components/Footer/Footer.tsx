/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { useResize } from '../common/UseResize';
import Logo from '../../../icons/iconLogo.svg';
import styles from './footer.module.css';

export function Footer() {
  const { width, isScreenHEAD,isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
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
          <Link to="/otvod">Отводы</Link>
          <Link to="/perehod">Переходы</Link>
          <Link to="/troynik">Тройники</Link>
          <Link to="/flanec">Фланцы</Link>
          <Link to="/zaglushka">Заглушки</Link>
          <Link to="/dno">Днища</Link>
          <Link to="/opora">Опоры</Link>
          <Link to="/shtucer">Штуцеры</Link>
          <Link className={styles.footerRightLinksProductsLast} to="/productinfo">Запорная арматура</Link>
        </div>
      </div>
    </div>
  );
}
