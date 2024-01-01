import React from 'react';
import styles from "@/src/styles/modal.module.css";

interface InputField {
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

interface SignupFormProps {
  title: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  inputFields: InputField[];
}

const SignupForm: React.FC<SignupFormProps> = ({ title, onSubmit, buttonText, inputFields }) => {
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

  return (
    <div>
      <h1 className={styles['login-title']}>{title}</h1>
      <form onSubmit={onSubmit} className={styles['form-container']}>
        {inputFields.map((field, index) => (
          <div key={index} className={styles['form-group']}>
            <input
              style={inputStyles}
              type={field.type}
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
            />
          </div>
        ))}
        <button className={styles['button-basic']}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
