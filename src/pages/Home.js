/**
 * Home Page Component
 * Landing page with hero section and call-to-action
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import Button from '../components/Button';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">{personalInfo.name}</span>
              </h1>
              <h2 className="hero-role">{personalInfo.role}</h2>
              <p className="hero-experience">{personalInfo.experience} of Excellence in Quality Assurance</p>
              <p className="hero-tagline">{personalInfo.tagline}</p>
              <p className="hero-summary">{personalInfo.summary}</p>
              
              <div className="hero-cta">
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => navigate('/projects')}
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline" 
                  size="large"
                  onClick={() => navigate('/contact')}
                >
                  Contact Me
                </Button>
              </div>
            </div>

            <div className="hero-image">
              <div className="profile-card">
                <div className="profile-icon">👨‍💻</div>
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">10K+</span>
                    <span className="stat-label">Tests Automated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Highlights Section */}
      <div className="highlights">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🎯</div>
              <h3>Expertise</h3>
              <p>Selenium, Playwright, Java, C#, TypeScript</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h3>Impact</h3>
              <p>Reduced testing time by 70% with robust frameworks</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🌐</div>
              <h3>Global Experience</h3>
              <p>Worked with Fortune 500 companies worldwide</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">💡</div>
              <h3>Innovation</h3>
              <p>Pioneering automation solutions for complex systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
