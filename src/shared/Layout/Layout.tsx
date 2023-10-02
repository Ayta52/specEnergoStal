import React from 'react';
import styles from './layout.module.css';

interface ILayoutProp {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProp) {
  return <div className={styles.layout}>{children}</div>;
}
