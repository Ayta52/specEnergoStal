import { createContext, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import Otvod from "../../../img/productImg/Otvod.svg";
import Perehod from "../../../img/productImg/Perehod.svg";
import Troynik from "../../../img/productImg/Troynik.svg";
import Flanec from "../../../img/productImg/Flanec.svg";
import Dno from "../../../img/productImg/Dno.svg";
import Zaglushka from "../../../img/productImg/Zaglushka.svg";
import Opora from "../../../img/productImg/Opora.svg";
import ZapornayaArmatura from "../../../img/productImg/ZapornayaArmatura.svg";
import backgroundImg from "../../../img/productImg/BackgroundProductList.svg";
import styles from "./ProductListTest.module.css";


export const MyContext = createContext({activeTab: 0, setActiveTab: (any) => any});
const productListTest = [
  {
    id: 1,
    name: "Отводы",
    image: Otvod,
  },
  {
    id: 2,
    name: "переходы",
    image: Perehod,
  }
];

export function ProductListTest() {

 
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
      setActiveTab(index);
      console.log(index)
    };

    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);
  
  
    return (
      <MyContext.Provider value={{ activeTab, setActiveTab }}>
        <div className={styles.container}>
          <h1>Продукция</h1>
          <div className={styles.productList}>
            <div className={styles.productItem}>
              {productListTest.map((item, index) => {
                return (
                  <Link
                    // to="/productdescription"
                    to="#"
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
      </MyContext.Provider>
    );
}
