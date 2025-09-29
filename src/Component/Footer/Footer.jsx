import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">MyLogo</div>

        <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookSquare />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MyLogo. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
