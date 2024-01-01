"use client"

import React, { useState } from "react";
import styles from "@/src/styles/modal.module.css";
import SignupForm from './signup-form';
import AccountButton from "./account-type-button";

interface SignupModalProps {
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

const SignupModal: React.FC<SignupModalProps> = () => {

  const [selectedAccount, setSelectedAccount] = useState('player');
  const [showSelectAccountType, setShowSelectAccountType] = useState(true);
  const [showPlayerContent, setShowPlayerContent] = useState(false);
  const [showAdminContent, setShowAdminContent] = useState(false);
  const [showAdminConfirmation, setShowAdminConfirmation] = useState(false);

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

  const handleAccountType = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedAccount === 'player') {
      setShowSelectAccountType(false)
      setShowPlayerContent(true);
      setShowAdminContent(false);
    } else if (selectedAccount === 'admin') {
      setShowSelectAccountType(false)
      setShowPlayerContent(false);
      setShowAdminContent(true);
    }
  };

  const handleAdminSignup =  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO
    // check passwords match
    // sends email

    setShowAdminContent(false)
    setShowAdminConfirmation(true)
  };

  const handlePlayerSignup =  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO
    // need more info
  };

  return (
      <div className={styles['modal-backdrop']} onClick={handleBackdropClick}>
        <div className={styles['modal-content']}>
          {showSelectAccountType && (
          <div>
            <h1 className={styles['login-title']}>Create account as...</h1>
            <form className={styles['form-container']} onSubmit={handleAccountType}>
              <div className={styles['account-type-container']}>
                <AccountButton
                  accountType="player"
                  selectedAccount={selectedAccount}
                  handleAccountSelect={handleAccountSelect}
                />
                <AccountButton
                  accountType="admin"
                  selectedAccount={selectedAccount}
                  handleAccountSelect={handleAccountSelect}
                />
              </div>
              <button type="submit" className={styles['button-basic']}>Continue</button>
            </form>
          </div>
          )}

          {showAdminContent && (
            <SignupForm
              title="Create your admin account"
              onSubmit={handleAdminSignup}
              buttonText="SIGN UP"
              inputFields={[
                { type: 'text', id: 'email', name: 'email', placeholder: 'Email' },
                { type: 'password', id: 'password', name: 'password', placeholder: 'Password' },
                { type: 'password', id: 'confirmpass', name: 'confirmpass', placeholder: 'Confirm Password' },
              ]}
            />
          )}
          {showPlayerContent && (
            <SignupForm
              title="Player Registration"
              onSubmit={handlePlayerSignup}
              buttonText="SIGN UP"
              inputFields={[
                { type: 'text', id: 'name', name: 'name', placeholder: 'Name' },
                { type: 'text', id: 'email', name: 'email', placeholder: 'Email' },
                { type: 'password', id: 'password', name: 'password', placeholder: 'Password' },
              ]}
            />
          )}

          {showAdminConfirmation && (
          <div className={styles['confirm-container']}>
            <h1 className={styles['confirm-title']}>Thank you!</h1>
            <h2 className={styles['confirm-text']}>Your registration has been submitted and is currently being verified.
              We will contact you shortly.
            </h2>
            <div className={styles["home-container"]}>
              <a href="/">
                <button className={styles['button-basic']}>
                  Home
                </button>
              </a>
            </div>
          </div>
          )}

          {!showAdminConfirmation && (
          <div className={styles['signup-section']}>
            <h1 className={styles['sign-up-text']}> Already registered?</h1>
            <a className={styles['sign-up-link']} href="/login"> Sign in.</a>
          </div>
          )}

        </div>
      </div>
  );
};

export default SignupModal;
