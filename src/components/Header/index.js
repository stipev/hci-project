import React from "react";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import logo from "./logo1.png";
import { FaCartPlus, FaUser } from "react-icons/fa";
function onMenuClick() {
  var x = document.getElementById("myNav");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

export default () => (
  <header className={styles.Header}>
    <div className={styles.Container}>
      <div className={styles.TitleAndLogoContainer}>
        <span className={styles.Title}>
          <span className={styles.TitleM}>EVO STARI</span>
          <span className={styles.TitleC}>SAMO JAKO</span>
        </span>
        <div className={styles.LogoContainer}>
          <img src={logo} className={styles.logo} />
        </div>
      </div>
      <div className={styles.NavContainer}>
        <button className={styles.MenuButton} onClick={onMenuClick}>
          MENU
        </button>
        <div id="myNav" className={styles.NavBar}>
          <Nav>
            <NavLink to="/" exact="true">
              HOME
            </NavLink>

            <NavLink to="/shop/">
              SHOP
              <FaCartPlus />
            </NavLink>

            <NavLink to="/contacts/">CONTACTS</NavLink>

            <NavLink to="/logIn/">
              LOG IN
              <FaUser />
            </NavLink>
          </Nav>
        </div>
      </div>
    </div>
  </header>
);
