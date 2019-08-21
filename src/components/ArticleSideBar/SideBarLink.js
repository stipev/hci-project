import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";

export default ({ children, ...rest }) => (
    <Link
        className={styles.sideBarLink}
        activeClassName={styles.sideBarLink__active}
        {...rest}
    >
        {children}
    </Link>
);