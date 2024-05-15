import {useEffect, useState} from 'react';
import { Link, Path } from "react-router-dom";
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
    name: "Отводы",
    image: Otvod,
    src: "/otvodinfo",
  },
  {
    id: 2,
    name: "переходы",
    image: Perehod,
    src: "/otvodinfo",
    // src: "/perehod",
  },
  {
    id: 3,
    name: "тройники",
    image: Troynik,
    src: "/troynik",
  },
  {
    id: 4,
    name: "фланцы",
    image: Flanec,
    src: "/flanec",
  },
  {
    id: 5,
    name: "днища",
    image: Dno,
    src: "/dno",
  },
  {
    id: 6,
    name: "заглушки",
    image: Zaglushka,
    src: "/zaglushka",
  },
  {
    id: 7,
    name: "опоры",
    image: Opora,
    src: "/opora",
  },
  {
    id: 8,
    name: "угольники точёные",
    image: Ugolnik,
    src: "/shtucer",
  },
  {
    id: 8,
    name: "запорная арматура",
    image: ZapornayaArmatura,
    src: "/productinfo",
  },
];

export function ProductList() {
  const [activeTab, setActiveTab] = useState(0);
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
                // to={item.src}
                to={{
                  pathname: "/otvodinfo",
              }} 
                className={styles.productItemFlex}
                key={index}
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
