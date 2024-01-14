"use client"

import styles from "@/src/styles/header.module.css";
import { Button } from "@/src/components/ui/button"
import Link from "next/link";


interface SiteHeaderProps {}

export const SiteHeader: React.FC<SiteHeaderProps> = () => {

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>logo</h1>
      </div>
      <div className={styles.right}>
      <Button asChild variant="custom">
        <Link href="/login">LOG IN</Link>
      </Button>
      </div>
    </header>
  );
};
