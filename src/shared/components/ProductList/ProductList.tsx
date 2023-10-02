import React from 'react';
import Otvod from '../../../img/productImg/Otvod.svg';
import Perehod from '../../../img/productImg/Perehod.svg';
import Troynik from '../../../img/productImg/Troynik.svg';
import Flanec from '../../../img/productImg/Flanec.svg';
import Dno from '../../../img/productImg/Dno.svg';
import Zaglushka from '../../../img/productImg/Zaglushka.svg';
import Opora from '../../../img/productImg/Opora.svg';
import Shtucer from '../../../img/productImg/Shtucer.svg';
import ZapornayaArmatura from '../../../img/productImg/ZapornayaArmatura.svg';
import backgroundImg from '../../../img/productImg/BackgroundProductList.svg';
import styles from './productList.module.css';

const productListMass = [
  {
    id: 1,
    name: 'Отводы',
    image: Otvod,
  },
  {
    id: 2,
    name: 'переходы',
    image: Perehod,
  },
  {
    id: 3,
    name: 'тройники',
    image: Troynik,
  },
  {
    id: 4,
    name: 'фланцы',
    image: Flanec,
  },
  {
    id: 5,
    name: 'днища',
    image: Dno,
  },
  {
    id: 6,
    name: 'заглушки',
    image: Zaglushka,
  },
  {
    id: 7,
    name: 'опоры',
    image: Opora,
  },
  {
    id: 8,
    name: 'штуцеры',
    image: Shtucer,
  },
  {
    id: 9,
    name: 'запорная арматура',
    image: ZapornayaArmatura,
  },
];

export function ProductList() {
  return (
    <div className={styles.container}>
      <h1>Продукция</h1>
      <div className={styles.productList}>
        <div className={styles.productItem}>
          {productListMass.map((item, index) => {
            return (
              <div className={styles.productItemFlex} key={index}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
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
