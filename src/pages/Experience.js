/**
 * Experience Page Component
 * Timeline of professional experience and career progression
 */

import React from 'react';
import { experience } from '../data/portfolioData';
import Timeline from '../components/Timeline';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <div className="experience-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Professional Experience</h1>
          <p className="page-subtitle">
            A decade of excellence in test automation and quality assurance
          </p>
        </div>

        {/* Career Stats */}
        <div className="career-stats">
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-content">
              <span className="stat-value">10+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏢</div>
            <div className="stat-content">
              <span className="stat-value">4</span>
              <span className="stat-label">Major Companies</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌍</div>
            <div className="stat-content">
              <span className="stat-value">15+</span>
              <span className="stat-label">Global Clients</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <span className="stat-value">20+</span>
              <span className="stat-label">Engineers Mentored</span>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="timeline-section">
          <h2 className="section-title">Career Journey</h2>
          <Timeline items={experience} />
        </div>

        {/* Key Achievements */}
        <div className="achievements-section">
          <h2 className="section-title">Career Highlights</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>Technical Excellence</h3>
              <p>Designed 50+ automation frameworks serving Fortune 500 companies</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">💰</div>
              <h3>Cost Optimization</h3>
              <p>Reduced testing costs by 45% through efficient automation strategies</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">⚡</div>
              <h3>Speed & Efficiency</h3>
              <p>Cut regression testing time from days to hours across projects</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🎓</div>
              <h3>Leadership</h3>
              <p>Established center of excellence and mentored 20+ engineers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
