import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import { navBarStyle } from "../styles/NavBarStyle";
import logo from "../icon/Logo64x64.webp";

function NavBar() {
  return (
    <div className={navBarStyle.navBarContainer}>
      {/* Container for Logo + Title */}
      <div className={navBarStyle.logoContainer}>
        <img src={logo} alt="Cryptonize Logo" className={navBarStyle.logo} />
        <div className={`${navBarStyle.titleText} truncate`}>CRYPTONIZE</div>
      </div>

      {/* Theme toggle on the far right */}
      <div className={`${navBarStyle.themeToggleContainer}`}>
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export default NavBar;
