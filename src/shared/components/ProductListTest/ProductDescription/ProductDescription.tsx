import { useContext, useEffect, useState } from "react";
import { productListMass } from "../../../utils/productListMass";
import styles from "./productDescription.module.css";
import classNames from "classnames";
import { Breadcrumbs } from "../../ProductInfo/Breadcrumbs";
import { DropDownInfo } from "../../ProductInfo/DropDownInfo";
import { useResize } from "../../common/UseResize";
import { useLocation } from "react-router-dom";

export function ProductDescription() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSectionRight, setActiveSectionRight] = useState(0);
 
  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveSectionRight(0);
  };
  
  const handleSectionRightClick = (index) => {
    setActiveSectionRight(index);
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
  }, [activeSectionRight]);

  return (
      <div className={styles.container}>
        <Breadcrumbs paths={paths} />

        <div className={styles.productInfoTabs}>
          <h1>{productListMass[activeTab].name}</h1>
          {/* {isScreenMd && (
            <DropDownInfo
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              handleTabClick={handleTabClick}
              productListMass={productListMass}
            />
          )} */}
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
                    <p key={index}>{item.description[activeSectionRight]}</p>
                  ))
                }
                </p>
              </div>

              <div className={styles.productInfoContentRight}>
                <ul>
                  {productListMass[activeTab].content.map((item, index) =>
                    item.buttons.map((item, index) => (
                      <li
                        className={classNames(
                          styles.listItem,
                          index === activeSectionRight ? styles.listItemActive : ""
                        )}
                        key={index}
                        onClick={() => handleSectionRightClick(index)}
                      >
                        {item}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

