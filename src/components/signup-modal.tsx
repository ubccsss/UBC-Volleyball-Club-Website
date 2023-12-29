
import React from "react";
import styles from "@/src/styles/modal.module.css";

interface SignupModalProps {
  showSignupModal: boolean;
  closeSignupModal: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({
  showSignupModal,
  closeSignupModal,
}) => {

  
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeSignupModal();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO

    closeSignupModal();
  };

  return (
    showSignupModal && (
      <div className={styles.modalBackdrop} onClick={handleBackdropClick}> 
        <div className={styles.modalContent}>
          <h1 className={styles.loginTitle}>Create account as...</h1>
          <div>
            <div>
              {/* ball icon */}
              <h1> Player </h1>
            </div>
            <div>
              {/* admin icon */}
              <h1> Admin </h1>
            </div>
          </div>
          <button>Continue</button>
          <div className={styles.signupSection}>
            <h1 className={styles.signUpText}> Already registered?</h1>
            <a className={styles.signUpLink} href="#"> Sign in.</a>

          </div>
        </div>
      </div>
    )
  );
};

export default SignupModal;
