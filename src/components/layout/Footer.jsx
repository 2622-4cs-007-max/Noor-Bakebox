
import ContactInfo from "./ContactInfo";
import StallInfo from "./StallInfo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-brand">
        <span className="material-symbols-rounded footer-logo">
          bakery_dining
        </span>

        <h2>Noor's Bake Box</h2>
        <p>Freshly baked with love, happiness in every bite!</p>
      </div>

      <ContactInfo />
      <StallInfo />

      <div className="footer-bottom">
        <div className="footer-line"></div>
        <p>
          © {currentYear} Noor's Bake Box. All Rights Reserved.
        </p>
         <p>Designed & Developed by Maheen Ghaffar ♥</p>
      </div>

    </footer>
  );
}

export default Footer;
