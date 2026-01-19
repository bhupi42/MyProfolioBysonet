/**
 * Footer Component
 * Professional footer with social links and copyright
 */

import React from 'react';
import { socialLinks } from '../data/navigationData';
import { personalInfo } from '../data/portfolioData';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">{personalInfo.name}</h3>
            <p className="footer-text">{personalInfo.role}</p>
            <p className="footer-tagline">{personalInfo.tagline}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="footer-contact">
              <li>📧 {personalInfo.email}</li>
              <li>📍 {personalInfo.location}</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-note">
            Built with React & Passion for Quality
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
