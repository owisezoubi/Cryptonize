import React from "react";
import { useNavigate } from "react-router-dom";
import { FooterStyle } from "../styles/FooterStyle";

const Footer = () => {
  const navigate = useNavigate();

  const handleAboutUsClick = () => {
    navigate("/about-us");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={FooterStyle.footerContainer}>
      <p className={FooterStyle.footerText}>
        © 2025 Cryptonize. All rights reserved.
      </p>
      <button
        onClick={handleAboutUsClick}
        className={FooterStyle.aboutUsButton}
      >
        About Us
      </button>
    </footer>
  );
};

export default Footer;
