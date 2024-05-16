import {useEffect} from 'react';
import { useActiveTab } from '../../utils/context';
import { Link } from "react-router-dom";
import Otvod from "../../../img/productImg/Otvod.svg";
import Perehod from "../../../img/productImg/Perehod.svg";
import Troynik from "../../../img/productImg/Troynik.svg";
import Flanec from "../../../img/productImg/Flanec.svg";
import Dno from "../../../img/productImg/Dno.svg";
import Zaglushka from "../../../img/productImg/Zaglushka.svg";
import Opora from "../../../img/productImg/Opora.svg";
import Ugolnik from "../../../img/productImg/Ugolnik.svg";
import ZapornayaArmatura from "../../../img/productImg/ZapornayaArmatura.svg";
import backgroundImg from "../../../img/productImg/BackgroundProductList.svg";
import styles from "./productList.module.css";
import { useResize } from "../common/UseResize";

const productListMass = [
  {
    id: 1,
    name: "отводы",
    image: Otvod,
    src: "/productdescription",
  },
  {
    id: 2,
    name: "переходы",
    image: Perehod,
    src: "/productdescription",
  },
  {
    id: 3,
    name: "тройники",
    image: Troynik,
    src: "/productdescription",
  },
  {
    id: 4,
    name: "фланцы",
    image: Flanec,
    src: "/productdescription",
  },
  {
    id: 5,
    name: "заглушки",
    image: Zaglushka,
    src: "/productdescription",
  },
  {
    id: 6,
    name: "угольники точёные",
    image: Ugolnik,
    src: "/productdescription",
  },
  {
    id: 7,
    name: "днища",
    image: Dno,
    src: "/productdescription",
  },
  {
    id: 8,
    name: "опоры",
    image: Opora,
    src: "/productdescription",
  },
  
  {
    id: 9,
    name: "запорная арматура",
    image: ZapornayaArmatura,
    src: "/productdescription",
  },
];



export function ProductList() {
  const {setActiveTab} = useActiveTab();
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    console.log(index);
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className={styles.container}>
      <h1>Продукция</h1>
      <div className={styles.productList}>
        <div className={styles.productItem}>
          {productListMass.map((item, index) => {
            return (
              <Link
                to={item.src}
                className={styles.productItemFlex}
                key={index}
                onClick={() => handleTabClick(index)}
              >
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </Link>
            );
          })}
          <div className={styles.backgroundImg}>
            <img src={backgroundImg} alt="backgroundImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
