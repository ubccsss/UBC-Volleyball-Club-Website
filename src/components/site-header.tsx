"use client"

import React, { useState } from "react";
import styles from "@/src/styles/header.module.css";
import Modal from "./login-model";

interface SiteHeaderProps {}

export const SiteHeader: React.FC<SiteHeaderProps> = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>logo</h1>
      </div>
      <div className={styles.right}>
        <button className={styles.loginButton} onClick={openModal}>
          LOG IN
        </button>
        <Modal showModal={showModal} closeModal={closeModal} />
      </div>
    </header>
  );
};