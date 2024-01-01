"use client"
import styles from "@/src/styles/modal.module.css";


interface ModalProps {
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

const SigninModal: React.FC<ModalProps> = () => {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        window.location.href = '/';
      }
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // logic TODO
  };

  return (
      <div className={styles['modal-backdrop']} onClick={handleBackdropClick}>
        <div className={styles['modal-content']}>
          <h1 className={styles['login-title']}>Login to your account</h1>
          <form onSubmit={handleSubmit} className={styles['form-container']}>
            <div className={styles['form-group']}>
              <input style={inputStyles} type="text" id="username" name="username" placeholder="Username"/>
            </div>
            <div>
              <div className={styles['form-group']}>
                <input style={inputStyles} type="password" id="password" name="password" placeholder="Password" />
              </div>
              <div className={styles['forgot-password']}>
                <a href="#">Forgot your password?</a>
              </div>
            </div>
            <button className={styles['button-basic']}>
              LOG IN
            </button>
          </form>
          <div className={styles['signup-section']}>
            <h1 className={styles['sign-up-text']}> Not registered?</h1>
            <a className={styles['sign-up-link']} href="/signup"> Sign up.</a>
          </div>
        </div>
      </div>
  );
};

export default SigninModal;
