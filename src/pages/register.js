import React from "react";
import { Layout } from "../components";
import styles from "../styles/registerPage.module.css";
export default () => (
  <Layout>
    <div className={styles.LogInContainer}>
      <div className={styles.Container}>
        <div className={styles.InputContainer}>
          <h4>Name: </h4>
          <input
            className={styles.InputStyles}
            type="text"
            placeholder="Enter your first name"
            name="uname"
            required
          />
          <h4>Surname: </h4>
          <input
            className={styles.InputStyles}
            type="text"
            placeholder="Enter your last name"
            name="uname"
            required
          />
          <h4>Birth date:</h4>
          <input
            className={styles.InputStyles}
            type="date"
            placeholder="Enter your credit card number"
            name="uname"
            required
          />
          <h4>Adress:</h4>
          <input
            className={styles.InputStyles}
            type="text"
            placeholder="Enter your adress with postal number"
            name="uname"
            required
          />
          <h4>Username:</h4>
          <input
            className={styles.InputStyles}
            type="text"
            placeholder="Enter your username"
            name="uname"
            required
          />
          <h4>E-mail adress:</h4>
          <input
            className={styles.InputStyles}
            type="text"
            placeholder="Enter  your e-mail adress"
            name="uname"
            required
          />
          <h4>Password:</h4>
          <input
            className={styles.InputStyles}
            type="password"
            placeholder="Enter password"
            name="psw"
            required
          />
          <h4>Credit card number:</h4>
          <input
            className={styles.InputStyles}
            type="number"
            placeholder="Enter your credit card number"
            name="uname"
            required
          />
        </div>
        <div className={styles.BottomContainer}>
          <div className={styles.ButtonContainer}>
            <button className={styles.LogInButton}>
              <h3>REGISTER</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
