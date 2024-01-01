"use client"

import styles from "@/src/styles/header.module.css";

interface SiteHeaderProps {}

export const SiteHeader: React.FC<SiteHeaderProps> = () => {

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>logo</h1>
      </div>
      <div className={styles.right}>
        <a href="/login">
          <button className={styles.loginButton}>
            LOG IN
          </button>
        </a>
      </div>
    </header>
  );
};