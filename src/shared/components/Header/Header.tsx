import { useResize } from '../common/UseResize';
import { DropDownNavBar } from './DropDownNavBar/DropDownNavBar';
import { IconLogo } from './IconLogo';
import { InfoBlock } from './InfoBlock';
import { NavBar } from './NavBar';
import phone from "../../../icons/phone.svg";
import sms from "../../../icons/sms.svg";
import styles from './header.module.css';

export function Header() {
  
  const {
    isScreenHEAD,
    isScreenXl,
  } = useResize();

  return (
    <header className={styles.header}>
      {isScreenHEAD && 
        <div className={styles.mainScreenLG}>
          <DropDownNavBar />
          <IconLogo />
          <div className={styles.phoneSms}>
            <a href="tel:+78312100108">
              <img src={phone} alt="phone" />
            </a>
            <a href="mailto:senergostal.ru">
              <img src={sms} alt="sms" />
            </a>
          </div>
        </div>
      }
      {isScreenXl && 
        <div className={styles.mainDesctop}>
          <IconLogo />
          <NavBar />
          <InfoBlock />
        </div>
      }
    </header>
  );
}
