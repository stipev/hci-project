import React from "react";
import { Layout } from "../components";
import styles from "../styles/contactPage.module.css";

export default () => {
  return (
    <Layout>
      <div className={styles.Container}>
        <div className={styles.miniContainer}>
          <h3 className={styles.h3Style}>Telephone number:</h3>
          <h3 className={styles.h3Gray}> +38599 999 9999</h3>
        </div>
        <div className={styles.miniContainer}>
          <h3 className={styles.h3Style}>Adress:</h3>
          <h3 className={styles.h3Gray}> Adresa adresa55 23000 Zadar</h3>
        </div>
        <div className={styles.miniContainer}>
          <h3 className={styles.h3Style}>E-mail: </h3>
          <h3 className={styles.h3Gray}> movement.conditioning@gmail.com</h3>
        </div>
      </div>
    </Layout>
  );
};
