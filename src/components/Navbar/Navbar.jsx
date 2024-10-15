import React from "react";
import classes from "./navbar.module.css";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.item}>
        <a href="#s"> Profile</a>
      </div>
      <div className={classes.item}>
        <a href="#s">Messages</a>
      </div>
      <div className={classes.item}>
        <a href="#s">News</a>
      </div>
      <div className={classes.item}>
        <a href="#s">Settings</a>
      </div>
    </nav>
  );
};
export default Navbar;
