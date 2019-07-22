import React from "react";

import styles from "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <a href="" className="navbar-item">
          <h1 className={styles.brand}>Galileo&apos;s Observatory</h1>
        </a>
      </div>
      <div className="navbar-menu"></div>
    </nav>
  );
};

export default Navbar;
