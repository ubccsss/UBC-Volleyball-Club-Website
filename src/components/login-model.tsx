import React from "react";
import styles from "@/src/styles/modal.module.css";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

const inputStyles = {
    width: "444.757px",
    height: "62px",
    color: "black",
    paddingLeft: "20px",
    paddingRight: "20px",
    fontSize: "24px",
    fontFamily: "Inter, sans-serif",
    borderRadius: "10px",

}

const Modal: React.FC<ModalProps> = ({ showModal, closeModal }) => {

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // logic TODO
    };
  return (
    showModal && (
      <div className={styles.modalBackdrop} onClick={handleBackdropClick}> 
        <div className={styles.modalContent}>
          <h1 className={styles.loginTitle}>Login to your account</h1>
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formGroup}>
              <input style={inputStyles} type="text" id="username" name="username" placeholder="Username"/>
            </div>
            <div>
                <div className={styles.formGroup}>
                    <input style={inputStyles} type="password" id="password" name="password" placeholder="Password" />
                </div>
                <div className={styles.forgotPassword}>
                    <a href="#">Forgot your password?</a>
                </div>
            </div>
            
            <button className={styles.loginButton}>
                LOG IN
            </button>
          </form>
          <h1 className={styles.signUpText}> Not registered? Sign up.</h1>
        </div>
      </div>
    )
  );
};

export default Modal;   