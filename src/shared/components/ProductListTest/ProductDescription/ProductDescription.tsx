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
  
  const [activeSection, setActiveSection] = useState(0);
  
  const handleSectionClick = (index) => {
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
            productListMass={productListMass}
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
            <div className={styles.productInfoContentLeft}>
              <p className={styles.productInfoText}>
                {productListMass[activeTab].content.map((item, index) => (
                  <div key={index}>{item.leftContent}</div>
                ))}
              </p>
            </div>

            <div className={styles.productInfoContentRight}>
              <ul>
                {productListMass[activeTab].content.map((item, index) => (
                  item.rightContent.map((item, index) => (
                    <li className={styles.listItem} key={index}>{item}</li>
                  ))
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
