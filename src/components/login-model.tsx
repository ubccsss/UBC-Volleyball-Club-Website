import React from "react";
import styles from "@/src/styles/modal.module.css";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, closeModal }) => {
  return (
    showModal && (
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContent}>
          <h2>Modal Content</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    )
  );
};

export default Modal;   