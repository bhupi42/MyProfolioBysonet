/**
 * About Page Component
 * Detailed professional background and bio
 */

import React from 'react';
import { personalInfo, aboutMe, certifications } from '../data/portfolioData';
import Card from '../components/Card';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">Get to know my journey in test automation</p>
        </div>

        {/* Introduction Section */}
        <div className="about-intro">
          <div className="intro-content">
            <div className="profile-image-large">
              <div className="profile-placeholder">👨‍💻</div>
            </div>
            <div className="intro-text">
              <h2>{personalInfo.name}</h2>
              <h3 className="intro-role">{personalInfo.role}</h3>
              <p className="intro-description">{aboutMe.introduction}</p>
              <p className="intro-approach"><strong>My Approach:</strong> {aboutMe.approach}</p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="highlights-section">
          <h2 className="section-title">Professional Highlights</h2>
          <div className="highlights-grid">
            {aboutMe.highlights.map((highlight, index) => (
              <Card key={index} className="highlight-item">
                <div className="highlight-number">{index + 1}</div>
                <p>{highlight}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="certifications-section">
          <h2 className="section-title">Certifications & Credentials</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <Card key={index} className="certification-card" hoverable={true}>
                <div className="cert-icon">🏆</div>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-year">{cert.year}</span>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-info-section">
          <Card className="contact-info-card">
            <h3>Let's Connect</h3>
            <div className="contact-details">
              <p>📧 <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
              <p>📍 {personalInfo.location}</p>
              <p>🔗 <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
