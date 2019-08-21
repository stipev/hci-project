import React from "react";
import { Layout } from "../components";
import { Link } from "gatsby";
import styles from "../styles/logInPage.module.css";

export default () => (
  <Layout>
    <div className={styles.LogInContainer}>
      <div className={styles.Container}>
        <div className={styles.InputContainer}>
          <h4>Username or e-mail adress:</h4>
          <input
            className={styles.InputStyles}
            type="text"
            placeholder="Enter username or e-mail adress"
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
        </div>
        <div className={styles.BottomContainer}>
          <div className={styles.ButtonContainer}>
            <button className={styles.LogInButton}>
              <h3>LOG IN</h3>
            </button>
          </div>
        </div>
        <Link to="/register" className={styles.LinkToRegister}>
          Don't have account? Register, click here!
        </Link>
      </div>
    </div>
  </Layout>
);
