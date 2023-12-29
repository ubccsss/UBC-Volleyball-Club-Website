import Link from "next/link"
import styles from "@/src/styles/header.module.css"

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>logo</h1>
      </div>
      <div className={styles.right}>
        <Link href="/login">
          <button className={styles.loginButton}>LOG IN</button>
        </Link>
      </div>
    </header>
  );
}
