import { useEffect, useState } from "react";
import { productListMass } from "../../../utils/productListMass";
import styles from "./productDescription.module.css";
import classNames from "classnames";
import { Breadcrumbs } from "../../ProductInfo/Breadcrumbs";
import { DropDownInfo } from "../../ProductInfo/DropDownInfo";
import { useResize } from "../../common/UseResize";

export function ProductDescription() {

  const [activeTab, setActiveTab] = useState(0);
  
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const paths = [
    { name: 'главная', url: '/' },
    { name: 'продукция', url: '/productlist' },
    { name: 'запорная арматура', url: '/productinfo' },
    { name: `${productListMass[activeTab].name}`, url: '#' },
  ];

 const {
    isScreenMd,
    isScreenBigMd
  } = useResize();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className={styles.container}>
      <Breadcrumbs paths={paths} />

      <div className={styles.productInfoTabs}>
        <h1>{productListMass[activeTab].name}</h1>
        {isScreenMd && (
          <DropDownInfo
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handleTabClick={handleTabClick}
            tabs={productListMass.map((tab) => tab.name)}
          />
        )}
        {isScreenBigMd && (
          <div className={styles.tabContent}>
          {productListMass.map((tab, index) => (
            <button
              key={index}
              className={classNames(
                styles.styleTab,
                index === activeTab ? styles.activeLinks : ""
              )}
              onClick={() => handleTabClick(index)}
            >
              {tab.name}
            </button>
          ))}
          </div>
        )}
        
        <div className={styles.productInfoContent}>
          <div className={styles.infoTab}>
            {productListMass[activeTab].content.map((item, index) => (
              <div key={index}>{item.label}</div>
            ))}
            {productListMass[activeTab].content.map((item, index) => (
              <div key={index}>{item.rightContent}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
