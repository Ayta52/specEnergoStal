import React from 'react';
import tabsInfoProductOtvod from './Data.jsx';
import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../ProductInfo/Breadcrumbs';
import styles from './otvod.module.css';
import classNames from 'classnames';
import { useResize } from '../../common/UseResize';
import { DropDownInfo } from '../../ProductInfo/DropDownInfo/DropDownInfo';
import { useActiveTab } from '../../../utils/context';


export function OtvodInfo() {
  const {activeTab, setActiveTab} = useActiveTab();
  const [activeSectionRight, setActiveSectionRight] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openSubspecies, setSubspecies] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveSectionRight(0);
  };
  const handleSectionRightClick = (index) => {
    setActiveSectionRight(index);
  };
  const handleSectionsetSubspeciesClick = (index) => {
    setSubspecies(index);
  };
  
  const handleAccordionToggle = (index) => {
    setSubspecies(0);
    setOpenAccordion(index);
    setActiveSectionRight(index);
  };

  const paths = [
    { name: 'главная', url: '/' },
    { name: 'продукция', url: '/productlist' },
    { name: `${tabsInfoProductOtvod[activeTab].name}`, url: '#' },
  ];

  const {
    isScreenMd,
    isScreenBigMd
  } = useResize();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  useEffect(() => {
    window.scrollTo(0, 300)
  }, [openSubspecies]);

  return (
    <div className={styles.container}>
      <Breadcrumbs paths={paths} />

      <div className={styles.productInfoTabs}>
        <h1>{tabsInfoProductOtvod[activeTab].name}</h1>
        {isScreenMd && (
          <DropDownInfo
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handleTabClick={handleTabClick}
            tabsInfoProductOtvod={tabsInfoProductOtvod}
          />
        )}
        {isScreenBigMd && (
          <div className={styles.tabContent}>
            {tabsInfoProductOtvod.map((tab, index) => (
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
            {activeTab <= 6
              ? tabsInfoProductOtvod[activeTab].content[activeSectionRight]
                  .contentLeft
              : tabsInfoProductOtvod[activeTab].content[activeSectionRight]
                  .subspecies[openSubspecies].subspeciesContent}

            <div className={styles.productInfoContentRight}>
              {activeTab <= 6 ? (
                <ul>
                {tabsInfoProductOtvod[activeTab].content.map((tab, index) => (
                  
                    <li
                      className={classNames(
                        styles.listItem,
                        index === activeSectionRight
                          ? styles.listItemActive
                          : ""
                      )}
                      onClick={() => handleSectionRightClick(index)}
                      key={tab.label}
                    >
                      {tab.label}
                    </li>
                  
                ))}
                </ul>
              ) : (
                <div className={styles.accordeonContainer}>
                  {tabsInfoProductOtvod[activeTab].content.map(
                    (item, index) => (
                      <>
                        <div
                          key={index}
                          className={classNames(
                            styles.listItem,
                            styles.listItemDiv,
                            openAccordion === index ? styles.listItemActive : ""
                          )}
                          onClick={() => {
                            handleAccordionToggle(index);
                          }}
                        >
                          {item.label}
                        </div>
                        <div>
                          {openAccordion === index && (
                            <ul className={styles.listItemSubspeciesUl}>
                              {item.subspecies.map((subspecies, index) => (
                                <li
                                  key={index}
                                  className={classNames(
                                    styles.listItemSubspeciesLi,
                                    openSubspecies === index
                                      ? styles.listItemActive
                                      : ""
                                  )}
                                  onClick={() => {
                                    handleSectionsetSubspeciesClick(index);
                                  }}
                                >
                                  {subspecies.subspeciesLabel}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

