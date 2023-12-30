import React, { useState } from "react";
import styles from "@/src/styles/modal.module.css";
import SignupModal from "./signup-modal";

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

    const [showSignupModal, setShowSignupModal] = useState(false);

    const handleSignupClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      
      setShowSignupModal(true);
      closeModal();
    };
  
    const closeSignupModal = () => {
      setShowSignupModal(false);
    };

  return (
    <>
    {showModal && (
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
            
            <button className={styles.buttonBasic}>
                LOG IN
            </button>
          </form>
          <div className={styles.signupSection}>
            <h1 className={styles.signUpText}> Not registered?</h1>
            <a className={styles.signUpLink} href="#" onClick={handleSignupClick}> Sign up.</a>

          </div>
        </div>
      </div>
    )}

    <SignupModal showSignupModal={showSignupModal} closeSignupModal={closeSignupModal}/>
    </>
  );
};

export default Modal;   