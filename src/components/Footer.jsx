// Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'animate.css/animate.min.css'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

const Footer = () => {
  return (
    <footer className="footer animate__animated animate__fadeIn ">
      <div className="footer-content text-center">
        <h3>Financial Management</h3>
        <br />
        <p>© {new Date().getFullYear()} Expense Tracker. All rights reserved.</p>
        
        <ul className="socials list-inline">
          <li className="list-inline-item">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="animate__animated animate__pulse" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="animate__animated animate__pulse" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/sp1862004" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faGithub} size="2x" className="animate__animated animate__pulse" />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/shailesh-patel-3102bb277" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="animate__animated animate__pulse" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
