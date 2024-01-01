"use client"

import React, { useState } from "react";
import styles from "@/src/styles/modal.module.css";

interface SignupModalProps {
}

const SignupModal: React.FC<SignupModalProps> = () => {

  const [selectedAccount, setSelectedAccount] = useState('player');

  const handleAccountSelect = (accountType: any) => {
    if (selectedAccount === accountType) {
      setSelectedAccount(selectedAccount); 
    } else {
      setSelectedAccount(accountType); 
    }
  };

  
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      window.location.href = '/';

    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(selectedAccount);

    // TODO
  };

  return (
      <div className={styles.modalBackdrop} onClick={handleBackdropClick}> 
        <div className={styles.modalContent}>
          <h1 className={styles.loginTitle}>Create account as...</h1>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.accountTypeContainer}>
              <button className={`${styles.accountType} 
                                  ${selectedAccount === 'player' ? styles.selected : ''}`}
                      onClick={() => handleAccountSelect('player')}
              >
                <div className={styles.accountDesc}>

                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5 37.5834C29.9349 37.5834 37.5834 29.9349 37.5834 20.5C37.5834 11.0652 29.9349 3.41669 20.5 3.41669C11.0652 3.41669 3.41669 11.0652 3.41669 20.5C3.41669 29.9349 11.0652 37.5834 20.5 37.5834Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.9583 15.375C15.8239 10.7705 19.8078 9.54843 29.0416 6.83332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.75338 8.32848C11.3839 15.6571 15.4921 20.8376 20.5 23.9166" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.7917 20.5028C22.8287 16.7134 28.0965 15.6191 35.875 15.375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.72383 18.8031C8.76677 23.8271 12.9992 27.2148 17.0833 29.0417" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.0363 33.8096C17.0931 31.3118 21.0439 25.9984 22.2082 18.7917" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.8291 36.8612C24.836 33.7452 29.6539 26.7354 30.75 17.0833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h1 className={styles.textBasic}> Player </h1>
                </div>
              </button>
              <button className={`${styles.accountType} 
                                  ${selectedAccount === 'admin' ? styles.selected : ''}`}
                      onClick={() => handleAccountSelect('admin')}
              >
                <div className={styles.accountDesc}>
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.3333 35.875V32.4583C27.3333 30.646 26.6134 28.9079 25.3319 27.6264C24.0504 26.3449 22.3123 25.625 20.5 25.625H10.25C8.43765 25.625 6.69956 26.3449 5.41806 27.6264C4.13656 28.9079 3.41663 30.646 3.41663 32.4583V35.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.375 18.7917C19.1489 18.7917 22.2083 15.7323 22.2083 11.9583C22.2083 8.18439 19.1489 5.125 15.375 5.125C11.601 5.125 8.54163 8.18439 8.54163 11.9583C8.54163 15.7323 11.601 18.7917 15.375 18.7917Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M27.3334 18.7917L30.75 22.2083L37.5834 15.375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h1 className={styles.textBasic}> Admin </h1>
                </div>
              </button>
            </div>
            <button className={styles.buttonBasic}>Continue</button>
          </form>
          <div className={styles.signupSection}>
            <h1 className={styles.signUpText}> Already registered?</h1>
            <a className={styles.signUpLink} href="/login"> Sign in.</a>
          </div>
        </div>
      </div>
    
  );
};

export default SignupModal;
